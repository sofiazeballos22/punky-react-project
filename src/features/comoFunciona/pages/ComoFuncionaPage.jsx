import { openWhatsApp } from "@/utils/whatsapp";

const ComoFuncionaPage = () => {
  return (
    <section
      id="como-funciona"
      className="bg-white/60 border-y border-slate-100/80 py-20 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal active">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-punkyDark">
            Cómo funciona <span className="punky-title">Punky</span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            En menos de unos minutos, desde tu celular, tenés una guía clara de
            qué hacer y, si corresponde, acceso a crédito o derivación a un
            humano.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 max-w-5xl mx-auto">
          {/* Paso 1 */}
          <div className="reveal bg-white rounded-3xl shadow-card border border-slate-100 p-7 flex flex-col gap-4 active transition-all duration-300 hover:shadow-xl hover:bg-gradient-to-br hover:from-violet-50 hover:to-purple-50 hover:-translate-y-1">
            <div className="w-10 h-10 rounded-2xl bg-violet-100 text-violet-700 flex items-center justify-center font-bold text-lg">
              1
            </div>
            <h3 className="font-semibold text-lg text-punkyDark">
              Chateás por WhatsApp
            </h3>
            <p className="text-slate-600 text-sm">
              Le contás a <span className="punky-title">Punky</span>, con tus
              palabras, quién sos y qué necesitás resolver: fuerza, trabajo,
              jubilación, compra, reclamo o duda.
            </p>
          </div>

          {/* Paso 2 */}
          <div className="reveal delay-100 bg-white rounded-3xl shadow-card border border-slate-100 p-7 flex flex-col gap-4 active transition-all duration-300 hover:shadow-xl hover:bg-gradient-to-br hover:from-indigo-50 hover:to-blue-50 hover:-translate-y-1">
            <div className="w-10 h-10 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-lg">
              2
            </div>
            <h3 className="font-semibold text-lg text-punkyDark">
              Análisis inteligente
            </h3>
            <p className="text-slate-600 text-sm">
              <span className="punky-title">Punky</span> combina información
              oficial, reglas específicas por fuerza y herramientas internas
              para entender tu situación y calcular montos o pasos a seguir.
            </p>
          </div>

          {/* Paso 3 */}
          <div className="reveal delay-200 bg-white rounded-3xl shadow-card border border-slate-100 p-7 flex flex-col gap-4 active transition-all duration-300 hover:shadow-xl hover:bg-gradient-to-br hover:from-emerald-50 hover:to-teal-50 hover:-translate-y-1">
            <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-lg">
              3
            </div>
            <h3 className="font-semibold text-lg text-punkyDark">
              Te dice qué hacer
            </h3>
            <p className="text-slate-600 text-sm">
              Recibís una respuesta clara: cuánto podés sacar, qué papeles
              juntar, qué reclamo iniciar o qué trámite seguir, paso a paso y
              sin tecnicismos.
            </p>
          </div>
        </div>

        <div className="mt-10 text-center reveal active">
          <button
            onClick={() =>
              openWhatsApp("Hola Punky, explicame paso a paso qué puedo hacer.")
            }
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-slate-900 text-white text-sm font-semibold hover:bg-black transition shadow-lg shadow-slate-900/10"
          >
            Empezar mi chat ahora
            <span className="text-lg">💬</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ComoFuncionaPage;
