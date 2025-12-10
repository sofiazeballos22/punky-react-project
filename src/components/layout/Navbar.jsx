import { openWhatsApp } from "@/utils/whatsapp";

const Navbar = () => {
  return (
    <nav className="w-full sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-100/70">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-punkyDark flex items-center justify-center text-white font-display font-bold text-xl">
            P
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-2xl leading-none text-punkyDark">
              Punky®
            </span>
            <span className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
              Asistente financiero y social IA
            </span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a
            href="#como-funciona"
            className="px-4 py-2.5 rounded-full transition-all duration-300 hover:text-punkyAccentStart hover:bg-violet-50"
          >
            Cómo funciona
          </a>
          <a
            href="#soluciones"
            className="px-4 py-2.5 rounded-full transition-all duration-300 hover:text-punkyAccentStart hover:bg-violet-50"
          >
            Soluciones
          </a>
          <a
            href="#fuerzas"
            className="px-4 py-2.5 rounded-full transition-all duration-300 hover:text-punkyAccentStart hover:bg-violet-50"
          >
            Fuerzas
          </a>
          <a
            href="#abuelos"
            className="px-4 py-2.5 rounded-full transition-all duration-300 hover:text-punkyAccentStart hover:bg-violet-50"
          >
            Abuelos
          </a>
          <a
            href="#compras"
            className="px-4 py-2.5 rounded-full transition-all duration-300 hover:text-punkyAccentStart hover:bg-violet-50"
          >
            Compras
          </a>

          <button
            onClick={() =>
              openWhatsApp("Hola Punky, quiero hacer una consulta.")
            }
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold bg-gradient-to-r from-punkyAccentStart to-punkyAccentEnd text-white shadow-glow hover:scale-105 transition"
          >
            Chatear por WhatsApp
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
