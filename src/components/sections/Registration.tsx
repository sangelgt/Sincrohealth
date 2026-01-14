
import React from 'react';
import RegistrationForm from '../ui/RegistrationForm';

const Registration = () => {
  return (
    <section className="py-32 px-6" id="registro">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6 tracking-tight">Recupere la rentabilidad y el control de su clínica hoy</h2>
          <p className="text-[var(--taupe)] font-light max-w-3xl mx-auto text-lg leading-relaxed">
            Sincronice sus operaciones y elimine la carga administrativa de forma inmediata. Obtenga un diagnóstico personalizado de su flujo de trabajo.
          </p>
        </div>
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6 pt-4">
            <div className="check-item">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--sincro-blue)]/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-[var(--sincro-blue)] font-bold">check</span>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800">Diagnóstico Operativo GRATUITO</h4>
                <p className="text-sm text-[var(--taupe)]">Análisis profundo de sus cuellos de botella actuales.</p>
              </div>
            </div>
            <div className="check-item">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--sincro-blue)]/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-[var(--sincro-blue)] font-bold">check</span>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800">Acceso a Demo por 30 días</h4>
                <p className="text-sm text-[var(--taupe)]">Experimente el ecosistema completo sin restricciones.</p>
              </div>
            </div>
            <div className="check-item">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--sincro-blue)]/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-[var(--sincro-blue)] font-bold">check</span>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800">Plan de Sincronización Personalizado</h4>
                <p className="text-sm text-[var(--taupe)]">Estrategia a medida adaptada a su volumen de pacientes.</p>
              </div>
            </div>
            <div className="check-item">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--sincro-blue)]/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-[var(--sincro-blue)] font-bold">check</span>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800">Soporte Prioritario de Implementación</h4>
                <p className="text-sm text-[var(--taupe)]">Un consultor dedicado para su fase de transición.</p>
              </div>
            </div>
            <div className="mt-8 p-6 rounded-[40px] border border-blue-100 bg-blue-50/30">
              <p className="text-[var(--taupe)] text-sm italic leading-relaxed">
                "La integración con SincroHealth nos permitió recuperar el enfoque clínico en menos de una semana. La carga administrativa simplemente desapareció."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-200"></div>
                <span className="text-xs font-bold text-slate-700">Dr. M. Arrieta, Director Médico</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <RegistrationForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
