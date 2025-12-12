const PhoneMockup = () => {
  return (
    <div className="reveal active delay-500 relative flex justify-center lg:justify-end z-10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-gradient-to-tr from-violet-200 to-indigo-200 rounded-full blur-[110px] opacity-50 -z-10" />

      {/* Mantener el float-animation con elevation */}
      <div className="float-animation relative w-[320px] h-[640px] bg-punkyDark rounded-[3.5rem] border-[10px] border-punkyDark shadow-2xl overflow-hidden z-20">
        <div className="w-full h-full bg-white flex flex-col pt-14 px-5 pb-6 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-8 w-28 bg-black rounded-b-2xl" />

          {/* Header chat */}
          <div className="flex items-center gap-4 border-b border-gray-100 pb-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-punkyAccentStart to-punkyAccentEnd rounded-full flex items-center justify-center font-display font-bold text-white text-xl shadow-sm">
              P
            </div>
            <div>
              <p className="font-display font-bold text-lg text-punkyDark">
                <span className="punky-title">Punky</span>
              </p>
              <p className="text-xs text-emerald-500 font-medium flex items-center gap-1">
                <span className="block w-2 h-2 bg-emerald-500 rounded-full" />
                En línea · WhatsApp
              </p>
            </div>
          </div>

          {/* Mensajes con texto optimizado para nitidez */}
          <div
            className="flex flex-col gap-3 flex-grow text-[13px]"
            style={{ transform: "translateZ(0)" }}
          >
            <div className="self-start bg-slate-100 p-3 rounded-3xl rounded-tl-sm max-w-[90%] shadow-sm">
              <p
                className="text-slate-800 leading-relaxed"
                style={{ textRendering: "optimizeLegibility" }}
              >
                🇦🇷 Hola, soy Punky, tu asistente financiero y social digital.
                Puedo ayudarte con cualquier de estos servicios:
              </p>
            </div>

            <div className="self-start bg-slate-100 p-3 rounded-3xl rounded-tl-sm max-w-[90%] shadow-sm">
              <p
                className="mb-2 text-slate-800"
                style={{ textRendering: "optimizeLegibility" }}
              >
                🅿️ Fuerzas · 🅿️ Abuelos · 🅿️ Trámites · 🅿️ Defensa del
                Consumidor · 🅿️ Créditos · 🅿️ Cheques · 🅿️ Compras · 🅿️ Legal ·
                🅿️ Contable · 🅿️ Fraudes
              </p>
              <p
                className="text-slate-700 font-medium"
                style={{ textRendering: "optimizeLegibility" }}
              >
                Contame con tus palabras: ¿qué necesitás resolver hoy?
              </p>
            </div>

            <div className="self-end bg-gradient-to-r from-punkyAccentStart to-punkyAccentEnd text-white p-3 rounded-3xl rounded-tr-sm max-w-[80%] shadow-md">
              <p style={{ textRendering: "optimizeLegibility" }}>
                Quiero saber cuánto crédito puedo sacar por mi recibo.
              </p>
            </div>

            <div className="self-start bg-slate-50 p-3 rounded-3xl rounded-tl-sm w-24 shadow-sm flex items-center gap-1">
              <span className="block w-2 h-2 bg-slate-300 rounded-full animate-bounce" />
              <span
                className="block w-2 h-2 bg-slate-300 rounded-full animate-bounce"
                style={{ animationDelay: "0.1s" }}
              />
              <span
                className="block w-2 h-2 bg-slate-300 rounded-full animate-bounce"
                style={{ animationDelay: "0.2s" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;
