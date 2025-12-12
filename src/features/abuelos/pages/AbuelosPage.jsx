import { openWhatsApp } from "@/utils/whatsapp";
import ChatMessage from "../components/ChatMessage";

const AbuelosPage = () => {
  return (
    <section
      id="abuelos"
      className="py-24 px-6 md:px-12 bg-gradient-to-br from-orange-50 via-amber-50 to-slate-50"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.3fr,1fr] gap-16 items-center">
        <div className="reveal space-y-6 active">
          <p className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-100 text-[12px] font-semibold text-amber-800">
            🅿️ <span className="punky-title">Punky</span> Abuelos · Pensado para
            explicar despacio
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-punkyDark">
            Para vos o para tus viejos: jubilaciones explicadas con paciencia.
          </h2>
          <p className="text-slate-700 text-base md:text-lg max-w-xl">
            <span className="punky-title">Punky</span> Abuelos está diseñado
            para hablar simple, sin abreviaturas ni términos raros. Ideal para
            que un hijo o nieto chatee por los abuelos, o para que el propio
            jubilado pueda preguntar sin vergüenza.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white/80 rounded-2xl border border-orange-100 p-4 text-sm shadow-card">
              <p className="font-semibold text-punkyDark mb-1">
                💰 Haberes y descuentos
              </p>
              <p className="text-slate-700">
                Qué es cada línea del recibo, por qué se descuenta tanto y qué
                parte corresponde a la obra social o a créditos viejos.
              </p>
            </div>
            <div className="bg-white/80 rounded-2xl border border-orange-100 p-4 text-sm shadow-card">
              <p className="font-semibold text-punkyDark mb-1">
                🏥 Obras sociales y turnos
              </p>
              <p className="text-slate-700">
                Guía para PAMI, obras sociales provinciales, cambios de médico,
                autorizaciones y reclamos.
              </p>
            </div>
            <div className="bg-white/80 rounded-2xl border border-orange-100 p-4 text-sm shadow-card">
              <p className="font-semibold text-punkyDark mb-1">
                🧾 Cobros indebidos
              </p>
              <p className="text-slate-700">
                Qué hacer si aparecen descuentos raros, seguros que nadie pidió
                o "servicios" que nunca se usaron.
              </p>
            </div>
            <div className="bg-white/80 rounded-2xl border border-orange-100 p-4 text-sm shadow-card">
              <p className="font-semibold text-punkyDark mb-1">
                📂 Trámites previsionales
              </p>
              <p className="text-slate-700">
                Reajustes, reconocimiento de aportes, pensiones, sucesiones y
                certificados básicos.
              </p>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap gap-4 items-center">
            <button
              onClick={() =>
                openWhatsApp(
                  "Hola Punky, quiero ayuda para un jubilado/pensionado."
                )
              }
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-punkyDark text-white text-sm font-semibold hover:bg-black transition shadow-lg shadow-slate-900/15"
            >
              Hablar con Punky Abuelos por WhatsApp
            </button>
            <p className="text-xs text-slate-500 max-w-xs">
              Ideal para mandar el link al grupo de la familia y que todos
              tengan el mismo lugar de consulta.
            </p>
          </div>
        </div>

        {/* Card de conversación con efecto typing mejorado */}
        <div className="reveal delay-150 active">
          <div className="bg-white rounded-[2rem] border border-orange-100 shadow-card p-8 space-y-6">
            <p className="text-xs uppercase tracking-[0.25em] text-orange-500">
              Forma de hablar de Punky Abuelos
            </p>

            {/* Conversación con avatares y efecto typing */}
            <div className="space-y-6 min-h-[380px]">
              {/* Mensaje de Abuela (izquierda) */}
              <ChatMessage
                emoji="👵"
                name="Abuela"
                text="Me vino menos sueldo este mes, no entiendo por qué."
                isUser={true}
                speed={70}
                delay={500}
              />

              {/* Respuesta de Punky (derecha) */}
              <ChatMessage
                emoji="🧠"
                name="Punky"
                text="Tranquila, vamos a verlo juntos. Mandame una foto clara de tu recibo de este mes y, si podés, del mes anterior. Yo te voy marcando qué cambió."
                isUser={false}
                speed={35}
                delay={5000}
              />

              {/* Explicación de Punky (derecha, continuación) */}
              <ChatMessage
                emoji="💡"
                name="Punky"
                text="Acá aparece un nuevo descuento llamado 'Servicio X'. Te explico qué significa y cómo hacer el reclamo para que te lo devuelvan."
                isUser={false}
                speed={35}
                delay={12000}
              />
            </div>

            {/* Texto estático */}
            <p className="text-[12px] text-slate-500 pt-4 border-t border-slate-100">
              Siempre con tono tranquilo, validando la preocupación y evitando
              tecnicismos innecesarios.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AbuelosPage;
