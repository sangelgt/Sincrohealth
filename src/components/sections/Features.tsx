
"use client";
import React from 'react';
import AnimatedSection from '../ui/AnimatedSection';

const Features = () => {
  return (
    <AnimatedSection className="py-32 px-6" id="caos">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6">Equilibrio <span className="text-[var(--taupe)]">vs</span> Caos</h2>
          <div className="w-24 h-1 bg-[var(--sincro-blue)] mx-auto opacity-20 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="organic-card p-10 text-center flex flex-col items-center">
            <div className="glass-icon-container mb-8">
              <span className="material-symbols-outlined text-[var(--sincro-blue)] text-4xl">air</span>
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-4">Recuperar el aliento</h3>
            <p className="text-[var(--taupe)] font-light leading-relaxed">Diga adiós al <strong>Burnout</strong>. Eliminamos el ruido administrativo para que su equipo vuelva a conectar con el propósito de sanar.</p>
          </div>
          <div className="organic-card p-10 text-center flex flex-col items-center">
            <div className="glass-icon-container mb-8">
              <span className="material-symbols-outlined text-[var(--s-blue)] text-4xl">bubble_chart</span>
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-4">Sincronización fluida</h3>
            <p className="text-[var(--taupe)] font-light leading-relaxed">Adiós al <strong>Info Chaos</strong>. Un flujo de datos armónico donde cada mensaje y cita encuentra su lugar sin esfuerzo humano.</p>
          </div>
          <div className="organic-card p-10 text-center flex flex-col items-center">
            <div className="glass-icon-container mb-8">
              <span className="material-symbols-outlined text-[var(--sincro-blue)] text-4xl">expand</span>
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-4">Crezca sin esfuerzo</h3>
            <p className="text-[var(--taupe)] font-light leading-relaxed"><strong>Escalabilidad</strong> orgánica. Nuestra arquitectura se expande silenciosamente a medida que su clínica conquista nuevos horizontes.</p>
          </div>
          <div className="organic-card p-10 text-center flex flex-col items-center">
            <div className="glass-icon-container mb-8">
              <span className="material-symbols-outlined text-[var(--sincro-blue)] text-4xl">water_drop</span>
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-4">Asegure cada gota</h3>
            <p className="text-[var(--taupe)] font-light leading-relaxed">Detenga la <strong>Fuga de Ingresos</strong>. Optimizamos cada recurso con la delicadeza de un relojero y la visión de un estratega.</p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Features;
