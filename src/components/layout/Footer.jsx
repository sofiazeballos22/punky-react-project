const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-100 py-10 px-6 relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 bg-punkyDark rounded-lg flex items-center justify-center text-white font-display font-bold">
            P
          </div>
          <div>
            <span className="font-display font-bold text-lg tracking-tight text-punkyDark">
              Punky®
            </span>
            <p className="text-slate-400 text-xs mt-1">
              Inteligencia artificial al servicio de la gente.
            </p>
          </div>
        </div>
        <div className="text-xs md:text-sm text-slate-500 flex flex-col md:items-end">
          <p className="flex items-center justify-center md:justify-end gap-2 mb-1">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 text-slate-400" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" 
              />
            </svg>
            Información basada en fuentes públicas oficiales.
          </p>
          <p className="text-[11px]">
            © 2025 Punky IA. Todos los derechos reservados. Punky es un asistente
            independiente y no representa a organismos estatales ni fuerzas.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
