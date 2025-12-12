import { openWhatsApp } from "@/utils/whatsapp";
import useNavbarActiveSection from "@/hooks/useNavbarActiveSection";

const Navbar = () => {
  const sections = [
    "como-funciona",
    "soluciones",
    "fuerzas",
    "abuelos",
    "compras",
  ];

  const { activeSection, handleLinkClick } = useNavbarActiveSection(sections);

  const getLinkClass = (section) => {
    const baseClass = "px-4 py-2.5 rounded-full transition-all duration-300";
    const hoverClass =
      "hover:text-violet-700 hover:bg-gradient-to-br hover:from-violet-100 hover:to-purple-100";
    const activeClass =
      "font-bold text-[15px] text-violet-700 bg-gradient-to-br from-violet-100 to-purple-100";

    return activeSection === section
      ? `${baseClass} ${activeClass}`
      : `${baseClass} ${hoverClass}`;
  };

  return (
    <nav className="w-full sticky top-0 z-40 bg-slate-50/95 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-6 lg:px-12 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <div className="punky-logo">P</div>
          <div className="flex flex-col">
            <span className="punky-brand-title">
              Punky<span className="punky-brand-registered">®</span>
            </span>
            <span className="text-[11px] md:text-[9px] lg:text-[11px] uppercase tracking-[0.18em] md:tracking-[0.15em] lg:tracking-[0.18em] text-slate-500">
              Asistente financiero y social IA
            </span>
          </div>
        </a>

        <div className="hidden md:flex items-center md:gap-3 lg:gap-8 text-sm font-medium">
          <a
            href="#como-funciona"
            className={getLinkClass("como-funciona")}
            onClick={() => handleLinkClick("como-funciona")}
          >
            Cómo funciona
          </a>
          <a
            href="#soluciones"
            className={getLinkClass("soluciones")}
            onClick={() => handleLinkClick("soluciones")}
          >
            Soluciones
          </a>
          <a
            href="#fuerzas"
            className={getLinkClass("fuerzas")}
            onClick={() => handleLinkClick("fuerzas")}
          >
            Fuerzas
          </a>
          <a
            href="#abuelos"
            className={getLinkClass("abuelos")}
            onClick={() => handleLinkClick("abuelos")}
          >
            Abuelos
          </a>
          <a
            href="#compras"
            className={getLinkClass("compras")}
            onClick={() => handleLinkClick("compras")}
          >
            Compras
          </a>

          <button
            onClick={() =>
              openWhatsApp("Hola Punky, quiero hacer una consulta.")
            }
            className="hidden lg:inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold bg-gradient-to-r from-punkyAccentStart to-punkyAccentEnd text-white shadow-glow hover:scale-105 transition"
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
