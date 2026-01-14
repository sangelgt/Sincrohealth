
"use client";

import React, { useState } from 'react';
import * as Select from '@radix-ui/react-select';
import { z } from 'zod';

const formSchema = z.object({
  fullName: z.string().min(2, "Nombre inválido"),
  specialty: z.string().min(2, "Especialidad inválida"),
  email: z.string().email("Correo inválido"),
  phone: z.string().min(9, "Teléfono inválido"),
  monthlyPatients: z.string().nonempty("Seleccione un rango"),
});

type FormData = z.infer<typeof formSchema>;
type FormState = 'idle' | 'loading' | 'success' | 'error';

const RegistrationForm = () => {
  const [formData, setFormData] = useState<Partial<FormData>>({});
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string[] | undefined>>>({});
  const [formState, setFormState] = useState<FormState>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('loading');

    const result = formSchema.safeParse(formData);
    if (!result.success) {
      setErrors(result.error.flatten().fieldErrors);
      setFormState('error');
      return;
    }

    setErrors({});

    try {
      const response = await fetch('/api/submit-diagnostico', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(result.data),
      });

      if (!response.ok) throw new Error('Error en el servidor');

      setFormState('success');
    } catch (error) {
      setFormState('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, monthlyPatients: value });
  };


  return (
    <div className="organic-card p-10 md:p-14 bg-white shadow-2xl border-t-8 border-[var(--sincro-blue)]/10">
      <form className="space-y-8" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-[var(--taupe)] font-bold ml-4">Nombre Completo</label>
            <input name="fullName" className="w-full bg-[var(--cream)] border-none rounded-full px-8 py-4 focus:ring-2 focus:ring-[var(--sincro-blue)]/20 transition-all placeholder:text-[var(--taupe)]/40 text-slate-700" placeholder="Ej: Dr. Julian Casablancas" required type="text" onChange={handleChange}/>
            {errors.fullName && <p className="text-red-500 text-xs ml-4">{errors.fullName[0]}</p>}
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-[var(--taupe)] font-bold ml-4">Especialidad</label>
            <input name="specialty" className="w-full bg-[var(--cream)] border-none rounded-full px-8 py-4 focus:ring-2 focus:ring-[var(--sincro-blue)]/20 transition-all placeholder:text-[var(--taupe)]/40 text-slate-700" placeholder="Ej: Cardiología" required type="text" onChange={handleChange}/>
            {errors.specialty && <p className="text-red-500 text-xs ml-4">{errors.specialty[0]}</p>}
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-[var(--taupe)] font-bold ml-4">Correo Corporativo</label>
            <input name="email" className="w-full bg-[var(--cream)] border-none rounded-full px-8 py-4 focus:ring-2 focus:ring-[var(--sincro-blue)]/20 transition-all placeholder:text-[var(--taupe)]/40 text-slate-700" placeholder="contacto@clinica.com" required type="email" onChange={handleChange}/>
            {errors.email && <p className="text-red-500 text-xs ml-4">{errors.email[0]}</p>}
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-[var(--taupe)] font-bold ml-4">Teléfono</label>
            <input name="phone" className="w-full bg-[var(--cream)] border-none rounded-full px-8 py-4 focus:ring-2 focus:ring-[var(--sincro-blue)]/20 transition-all placeholder:text-[var(--taupe)]/40 text-slate-700" placeholder="+34 000 000 000" required type="tel" onChange={handleChange}/>
            {errors.phone && <p className="text-red-500 text-xs ml-4">{errors.phone[0]}</p>}
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest text-[var(--taupe)] font-bold ml-4">Pacientes Mensuales (Volumen Estimado)</label>
          <Select.Root onValueChange={handleSelectChange}>
            <Select.Trigger className="w-full bg-[var(--cream)] border-none rounded-full px-8 py-4 focus:ring-2 focus:ring-[var(--sincro-blue)]/20 transition-all text-slate-600 appearance-none cursor-pointer text-left relative">
              <Select.Value placeholder="Seleccione un rango..." />
              <Select.Icon className="absolute inset-y-0 right-6 flex items-center pointer-events-none text-[var(--taupe)]">
                <span className="material-symbols-outlined text-xl">expand_more</span>
              </Select.Icon>
            </Select.Trigger>
            <Select.Portal>
              <Select.Content className="bg-white rounded-lg shadow-lg">
                <Select.Viewport className="p-2">
                  <Select.Item value="low" className="px-8 py-2 rounded-md cursor-pointer hover:bg-gray-100">1 - 100 pacientes</Select.Item>
                  <Select.Item value="medium" className="px-8 py-2 rounded-md cursor-pointer hover:bg-gray-100">101 - 500 pacientes</Select.Item>
                  <Select.Item value="high" className="px-8 py-2 rounded-md cursor-pointer hover:bg-gray-100">501 - 1,000 pacientes</Select.Item>
                  <Select.Item value="enterprise" className="px-8 py-2 rounded-md cursor-pointer hover:bg-gray-100">Más de 1,000 pacientes</Select.Item>
                </Select.Viewport>
              </Select.Content>
            </Select.Portal>
          </Select.Root>
          {errors.monthlyPatients && <p className="text-red-500 text-xs ml-4">{errors.monthlyPatients[0]}</p>}
        </div>
        <div className="pt-4">
          <button
            type="submit"
            disabled={formState === 'loading'}
            className="w-full cta-button bg-[var(--sincro-blue)] text-white text-xl font-semibold shadow-xl shadow-blue-500/20 hover:bg-blue-600 hover:shadow-blue-500/40 transform hover:-translate-y-1 disabled:opacity-50"
          >
            {formState === 'loading' ? 'Enviando...' : 'Agendar Consultoría Privada'}
          </button>
          {formState === 'success' && <p className="text-green-500 text-center mt-4">¡Gracias! Nos pondremos en contacto con usted en breve.</p>}
          {formState === 'error' && <p className="text-red-500 text-center mt-4">Hubo un error al enviar el formulario. Por favor, inténtelo de nuevo.</p>}
          <p className="text-center text-[var(--taupe)] text-[10px] uppercase tracking-widest font-bold mt-6 flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-sm">verified_user</span>
            Confidencialidad garantizada · 30 días de prueba sin compromiso
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
