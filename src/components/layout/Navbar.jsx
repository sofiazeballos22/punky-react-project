import { openWhatsApp } from "@/utils/whatsapp";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "como-funciona",
        "soluciones",
        "fuerzas",
        "abuelos",
        "compras",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            return;
          }
        }
      }
      setActiveSection("");
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLinkClass = (section) => {
    const baseClass = "px-4 py-2.5 rounded-full transition-all duration-300";
    const hoverClass =
      "hover:text-violet-700 hover:bg-gradient-to-br hover:from-violet-100/40 hover:to-purple-100/40";
    const activeClass =
      "font-bold text-[15px] text-violet-700 bg-gradient-to-br from-violet-100/40 to-purple-100/40";

    return activeSection === section
      ? `${baseClass} ${activeClass}`
      : `${baseClass} ${hoverClass}`;
  };

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
          <a href="#como-funciona" className={getLinkClass("como-funciona")}>
            Cómo funciona
          </a>
          <a href="#soluciones" className={getLinkClass("soluciones")}>
            Soluciones
          </a>
          <a href="#fuerzas" className={getLinkClass("fuerzas")}>
            Fuerzas
          </a>
          <a href="#abuelos" className={getLinkClass("abuelos")}>
            Abuelos
          </a>
          <a href="#compras" className={getLinkClass("compras")}>
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
