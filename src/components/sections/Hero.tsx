
"use client"
import React from 'react';
import { MotionDiv, MotionH1, MotionP, MotionButton, MotionA, MotionSpan } from '../ui/Motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-100/30 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-orange-50/50 rounded-full blur-[100px]"></div>
      <MotionDiv
        className="max-w-5xl mx-auto px-6 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <MotionSpan
          className="inline-block px-4 py-1.5 bg-white/50 border border-[var(--taupe)]/20 rounded-full text-[var(--taupe)] text-xs font-bold uppercase tracking-widest mb-8"
          variants={itemVariants}
        >
          Organic Premium Experience
        </MotionSpan>
        <MotionH1
          className="hero-title text-5xl md:text-7xl font-light text-slate-900 mb-6"
          variants={itemVariants}
        >
          Transforme su clínica con <span className="font-semibold text-[var(--sincro-blue)]">SincroHealth AI</span>
        </MotionH1>
        <MotionP
          className="text-xl md:text-2xl text-[var(--taupe)] font-light max-w-3xl mx-auto mb-4 leading-relaxed"
          variants={itemVariants}
        >
          Elevando la gestión médica hacia una experiencia de serenidad y rentabilidad sincronizada.
        </MotionP>
        <MotionP
          className="text-lg text-[var(--taupe)]/70 font-light italic mb-12"
          variants={itemVariants}
        >
          Alcance la serenidad administrativa que su equipo merece y su vocación demanda.
        </MotionP>
        <MotionDiv
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          variants={itemVariants}
        >
          <MotionButton className="cta-button bg-[var(--sincro-blue)] text-white text-lg font-medium hover:scale-105 shadow-2xl shadow-blue-500/30">
            Solicita una Demo Gratuita
          </MotionButton>
          <MotionA className="text-[var(--taupe)] font-semibold flex items-center gap-2 hover:translate-x-1 transition-transform" href="#solucion">
            Conoce nuestra IA Humana <span className="material-symbols-outlined">arrow_forward</span>
          </MotionA>
        </MotionDiv>
      </MotionDiv>
    </section>
  );
};

export default Hero;
