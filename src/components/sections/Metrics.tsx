
"use client";
import React from 'react';
import AnimatedSection from '../ui/AnimatedSection';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

interface AnimatedNumberProps {
  value: number;
  isPercent?: boolean;
  isPlus?: boolean;
}

const AnimatedNumber = ({ value, isPercent = false, isPlus = false }: AnimatedNumberProps) => {
    const controls = useAnimation();
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

    useEffect(() => {
        if (inView) {
            controls.start({
                opacity: 1,
                y: 0,
                transition: { duration: 1, ease: "easeOut" }
            });
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            className="text-5xl font-light text-[var(--sincro-blue)] mb-2"
        >
            {isPlus && '+'}
            {value}
            {isPercent && '%'}
        </motion.div>
    );
};

const Metrics = () => {
  return (
    <AnimatedSection className="py-32 px-6" id="beneficios">
      <div className="max-w-7xl mx-auto">
        <div className="organic-card p-12 md:p-20 bg-slate-50 text-[var(--deep-navy)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[60%] h-full bg-blue-600/5 blur-[120px]"></div>
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight text-[var(--deep-navy)]">Métricas que inspiran <br/><span className="text-[var(--sincro-blue)]">tranquilidad</span></h2>
              <p className="text-[var(--deep-navy)] mb-12 text-lg font-light">Nuestros resultados no solo son números; son minutos recuperados para lo que realmente importa: la atención al paciente.</p>
              <div className="grid grid-cols-2 gap-12">
                <div>
                  <AnimatedNumber value={-40} isPercent />
                  <p className="text-xs text-[var(--deep-navy)] uppercase tracking-widest font-bold">Ausentismo</p>
                  <p className="text-[10px] text-[var(--deep-navy)] mt-2">Recordatorios empáticos inteligentes</p>
                </div>
                <div>
                  <AnimatedNumber value={25} isPercent isPlus />
                  <p className="text-xs text-[var(--deep-navy)] uppercase tracking-widest font-bold">Retorno ROI</p>
                  <p className="text-[10px] text-[var(--deep-navy)] mt-2">Optimización de agenda y recursos</p>
                </div>
                <div>
                  <AnimatedNumber value={-85} isPercent />
                  <p className="text-xs text-[var(--deep-navy)] uppercase tracking-widest font-bold">Carga Manual</p>
                  <p className="text-[10px] text-[var(--deep-navy)] mt-2">Automatización de flujos clínicos</p>
                </div>
                <div>
                  <p className="text-5xl font-light text-[var(--sincro-blue)] mb-2">24/7</p>
                  <p className="text-xs text-[var(--deep-navy)] uppercase tracking-widest font-bold">Disponibilidad</p>
                  <p className="text-[10px] text-[var(--deep-navy)] mt-2">Atención ininterrumpida de alto nivel</p>
                </div>
              </div>
            </div>
            <div className="dashboard-glass p-8 relative">
              <div className="flex justify-between items-center mb-10">
                <div>
                  <p className="text-xs text-[var(--deep-navy)] uppercase tracking-widest mb-1 font-bold">Status del Sistema</p>
                  <h4 className="text-xl font-medium text-[var(--deep-navy)]">Panel de Calma Operativa</h4>
                </div>
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(34,197,94,0.3)]"></div>
              </div>
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between mb-2 text-sm font-light">
                    <span className="text-[var(--deep-navy)] font-medium">Pacientes Sincronizados</span>
                    <span className="text-[var(--deep-navy)] font-bold">98%</span>
                  </div>
                  <div className="h-1.5 w-full bg-[var(--deep-navy)]/10 rounded-full overflow-hidden">
                    <div className="h-full bg-[var(--sincro-blue)] w-[98%] rounded-full shadow-[0_0_10px_var(--sincro-blue)]"></div>
                  </div>
                </div>
                <div className="flex items-end gap-3 h-40">
                  <div className="flex-1 bg-[var(--deep-navy)]/20 rounded-t-2xl h-[30%] border-t border-[var(--deep-navy)]/30"></div>
                  <div className="flex-1 bg-[var(--deep-navy)]/30 rounded-t-2xl h-[55%] border-t border-[var(--deep-navy)]/40"></div>
                  <div className="flex-1 bg-blue-500/20 rounded-t-2xl h-[45%] border-t border-blue-500/30"></div>
                  <div className="flex-1 bg-[var(--sincro-blue)] rounded-t-2xl h-[85%] shadow-[0_0_30px_rgba(19,127,236,0.2)]"></div>
                  <div className="flex-1 bg-[var(--deep-navy)]/20 rounded-t-2xl h-[60%] border-t border-[var(--deep-navy)]/30"></div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white/40 p-4 rounded-3xl border border-[var(--deep-navy)]/10">
                    <p className="text-[10px] text-[var(--deep-navy)] mb-1 font-bold">TRIAJE</p>
                    <p className="text-lg font-semibold text-[var(--deep-navy)]">Activo</p>
                  </div>
                  <div className="bg-white/40 p-4 rounded-3xl border border-[var(--deep-navy)]/10">
                    <p className="text-[10px] text-[var(--deep-navy)] mb-1 font-bold">ALERTA</p>
                    <p className="text-lg font-semibold text-[var(--deep-navy)]">0</p>
                  </div>
                  <div className="bg-white/40 p-4 rounded-3xl border border-[var(--deep-navy)]/10">
                    <p className="text-[10px] text-[var(--deep-navy)] mb-1 font-bold">LATENCIA</p>
                    <p className="text-lg font-semibold text-[var(--deep-navy)]">0.2s</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Metrics;
