
"use client";
import React from 'react';
import Image from 'next/image';
import AnimatedSection from '../ui/AnimatedSection';

const Solution = () => {
  return (
    <AnimatedSection className="py-32 bg-white/50" id="solucion">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-8 leading-tight">
              La IA que se siente <br/><span className="italic text-[var(--sincro-blue)]">naturalmente</span> humana.
            </h2>
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-[var(--sincro-blue)]/20 flex items-center justify-center">
                  <span className="text-[var(--sincro-blue)] font-bold">01</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Booking Booster</h4>
                  <p className="text-[var(--taupe)] font-light"><strong>Natural Agenda:</strong> Un ecosistema de citas que respira. Algoritmos predictivos que entienden el contexto vital del paciente para una programación fluida y sin solapamientos.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-[var(--sincro-blue)]/20 flex items-center justify-center">
                  <span className="text-[var(--sincro-blue)] font-bold">02</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Triaje Empático</h4>
                  <p className="text-[var(--taupe)] font-light"><strong>Priority &amp; Sensitivity:</strong> Una acogida digital que prioriza la urgencia clínica sin perder la calidez humana, identificando matices emocionales en cada consulta inicial.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-[var(--sincro-blue)]/20 flex items-center justify-center">
                  <span className="text-[var(--sincro-blue)] font-bold">03</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Bóveda WhatsApp-to-EHR</h4>
                  <p className="text-[var(--taupe)] font-light"><strong>Invisible Security:</strong> Conversaciones cifradas que se integran automáticamente en el historial clínico, garantizando que ninguna palabra del paciente se pierda en el vacío.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="organic-card p-4 bg-gradient-to-br from-white to-[var(--cream)] overflow-hidden">
              <Image
                alt="SincroHealth Premium Interface"
                className="w-full rounded-[40px] opacity-90 shadow-inner"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeghzT-Rz1NDDDzJL1_2S_j8NGQ0xB7wUMHJS7vJGM1ro5xJ2hiJKOARZygQ-9rLe18Cw7FU-Inm8m3mxGbsDtrSABXvlePd_bh0-q_gW72gFi4Gmyvc_4h_JCIsGGqjui6bwSoITOMkyQZhLaXOyQsQwirOzSDhKkAhCTDyldl7Sv645DRlgaCPDWxeVIGv0DlZLbmvFqZwexeDiDXYMso437d65X_VxqLLFw0nDJO4r4TUeOTIPviHF60o38J-DtiYfVJ1jdjnOx"
                width={500}
                height={500}
              />
              <div className="absolute -bottom-6 -right-6 organic-card bg-white p-8 max-w-[220px] shadow-2xl">
                <div className="flex items-center gap-2 mb-1">
                  <span className="material-symbols-outlined text-[var(--sincro-blue)] text-sm">auto_awesome</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--taupe)]">Eficiencia IA</span>
                </div>
                <p className="text-5xl font-bold text-[var(--sincro-blue)] tracking-tighter">-85%</p>
                <p className="text-xs font-medium text-[var(--taupe)] mt-1">Carga Manual Operativa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Solution;
