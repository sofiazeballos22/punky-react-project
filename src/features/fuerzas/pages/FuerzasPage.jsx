import { openWhatsApp } from "@/utils/whatsapp";
import useTitleReveal from "@/hooks/useTitleReveal";
import useSingleCardReveal from "@/hooks/useSingleCardReveal";

const FuerzasPage = () => {
  const { titleRef, subtitleRef } = useTitleReveal();
  const cardRef = useSingleCardReveal();

  return (
    <section
      id="fuerzas"
      className="relative py-24 px-6 md:px-12 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white"
    >
      <div className="absolute inset-y-0 right-0 w-[460px] bg-gradient-to-tl from-punkyAccentStart/30 to-punkyAccentEnd/10 opacity-40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="reveal space-y-6 active">
          <p className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[12px] font-semibold tracking-wide">
            <span className="punky-logo-badge">P</span>{" "}
            <span className="punky-title">Punky</span> Fuerzas · Especializado
            por fuerza
          </p>
          <h2
            ref={titleRef}
            className="title-reveal font-display text-3xl md:text-4xl font-bold leading-tight"
          >
            El módulo que entiende tu recibo, tu jerarquía y tu fuerza.
          </h2>
          <p
            ref={subtitleRef}
            className="subtitle-reveal text-sm md:text-base text-slate-200 max-w-xl"
          >
            <span className="punky-title">Punky</span> Fuerzas fue entrenado
            para hablar el idioma de cada fuerza: Policía Federal, Ciudad,
            Bonaerense, provinciales, SPF, PSA, Gendarmería, Prefectura,
            Ejército, Armada y Fuerza Aérea.
          </p>

          <ul className="space-y-3 text-sm text-slate-200">
            <li className="flex gap-3">
              <span className="mt-1 w-2 h-2 rounded-full bg-emerald-400" />
              <span>
                <strong className="text-white">
                  Análisis según protocolo:
                </strong>{" "}
                detecta tu fuerza y aplica las reglas específicas de Decreto
                1412 (manual o automático según corresponda).
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 w-2 h-2 rounded-full bg-emerald-400" />
              <span>
                <strong className="text-white">Haberes y descuentos:</strong>{" "}
                interpreta tu recibo, explica cada código y te ayuda a entender
                qué te están descontando.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 w-2 h-2 rounded-full bg-emerald-400" />
              <span>
                <strong className="text-white">Trámites internos:</strong> guías
                básicas para licencias, junta médica, pases, ascensos y
                certificados de servicio.
              </span>
            </li>
          </ul>

          <div className="pt-4">
            <button
              onClick={() =>
                openWhatsApp(
                  "Hola Punky, soy de una fuerza y quiero que revises mi recibo."
                )
              }
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-punkyDark text-sm font-semibold hover:bg-slate-100 transition shadow-lg shadow-black/30"
            >
              Hablar con Punky Fuerzas por WhatsApp
              <span>🛡️</span>
            </button>
          </div>

          <p className="pt-2 text-[12px] text-slate-400">
            Regla de contención: si entrás por Punky Fuerzas primero vas a
            recibir orientación informativa. El crédito sólo se ofrece si vos lo
            pedís o cuando ya entiendas tu situación.
          </p>
        </div>

        <div ref={cardRef} className="card-reveal-bottom">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-[0_30px_80px_rgba(0,0,0,0.6)] backdrop-blur">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-300 mb-4">
              Ejemplo de caso real
            </p>
            <div className="bg-black/40 rounded-2xl border border-white/10 p-4 text-[13px] text-slate-100 space-y-3">
              <p className="font-semibold">
                👮 Usuario:{" "}
                <span className="font-normal">
                  "Soy suboficial de Gendarmería, quiero saber cuánto puedo
                  sacar por Decreto."
                </span>
              </p>
              <p>
                🧠 Punky:{" "}
                <span className="text-slate-200">
                  "Gracias por confiar, vamos paso a paso. Primero voy a
                  analizar tu recibo de haberes. Mandame una foto clara de la
                  primera hoja, por favor."
                </span>
              </p>
              <p className="text-xs text-emerald-300">
                ✔ Al recibir cada archivo: "Gracias, recibí tu archivo."
              </p>
              <p>
                💬 Resultado:{" "}
                <span className="text-slate-200">
                  "Según tu disponible, el sistema detecta que podés acceder
                  hasta $ XXX.XXX en cuotas de $ XX.XXX. Si te sirve, te guío
                  con la documentación."
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FuerzasPage;
