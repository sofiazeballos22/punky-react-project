import { openWhatsApp } from '@/utils/whatsapp';
import PhoneMockup from '@/components/ui/PhoneMockup';

const HeroPage = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative bg-gradient-to-br from-violet-100 via-purple-50 to-indigo-100">
      <section 
        id="top" 
        className="relative max-w-7xl mx-auto px-6 md:px-12 pt-14 pb-24 lg:pt-20 lg:pb-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
      >
      {/* Texto */}
      <div className="space-y-8 text-center lg:text-left z-20">
        <div className="reveal active inline-flex items-center bg-violet-50 border border-violet-100 rounded-full px-4 py-2 mb-2">
          <span className="flex h-2.5 w-2.5 relative mr-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-violet-500" />
          </span>
          <span className="text-xs md:text-sm font-medium text-violet-700">
            Orientación oficial, humana y disponible 24/7 por WhatsApp
          </span>
        </div>

        <h1 className="reveal active delay-100 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-punkyDark">
          Tus trámites, finanzas y derechos,
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-punkyAccentStart to-punkyAccentEnd mt-1">
            resueltos hablando con Punky.
          </span>
        </h1>

        <p className="reveal active delay-200 text-base md:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
          Punky es tu asistente financiero y social digital. En un solo chat
          recibís ayuda para créditos, fuerzas, jubilaciones, defensa del consumidor,
          compras, trámites, temas legales y contables. Sin filas, sin carpetas,
          explicado en simple.
        </p>

        <div className="reveal active delay-300 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
          <button 
            onClick={() => openWhatsApp('Hola Punky, quiero empezar.')}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-base md:text-lg font-bold text-white transition-all duration-200 bg-gradient-to-r from-punkyAccentStart to-punkyAccentEnd rounded-full hover:shadow-glow hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
          >
            Chatear ahora por WhatsApp
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-5 h-5 ml-2 -mr-1 transition group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>

          <button 
            onClick={() => scrollToSection('como-funciona')}
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-full border border-slate-200 bg-white/70 hover:bg-slate-50 text-slate-700 backdrop-blur"
          >
            Ver cómo funciona
          </button>
        </div>

        <div className="reveal active delay-400 flex flex-wrap gap-4 justify-center lg:justify-start pt-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Respuestas basadas en información pública oficial</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-slate-400" />
            <span>No representa a organismos estatales ni fuerzas</span>
          </div>
        </div>
      </div>

      {/* Mockup celular */}
      <PhoneMockup />
      </section>
    </div>
  );
};

export default HeroPage;
