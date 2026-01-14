
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-20 px-6 border-t border-[var(--taupe)]/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-[var(--taupe)]/20 rounded-full flex items-center justify-center">
            <span className="material-symbols-outlined text-[var(--taupe)] text-xs">all_inclusive</span>
          </div>
          <span className="font-bold text-slate-400 tracking-tight">SincroHealth AI</span>
        </div>
        <div className="flex gap-10">
          <a className="nav-link hover:text-[var(--sincro-blue)] transition-colors" href="#">Privacidad</a>
          <a className="nav-link hover:text-[var(--sincro-blue)] transition-colors" href="#">Términos</a>
          <a className="nav-link hover:text-[var(--sincro-blue)] transition-colors" href="#">Contacto</a>
        </div>
        <p className="text-[var(--taupe)] text-sm font-light">© 2024 SincroHealth AI. Organic Premium Edition.</p>
      </div>
    </footer>
  );
};

export default Footer;
