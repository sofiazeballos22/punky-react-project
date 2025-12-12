import { openWhatsApp } from "@/utils/whatsapp";
import useTitleReveal from "@/hooks/useTitleReveal";

const ComprasPage = () => {
  const { titleRef, subtitleRef } = useTitleReveal();

  return (
    <section
      id="compras"
      className="py-24 px-6 md:px-12 bg-slate-950 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(124,58,237,0.45),transparent_60%),radial-gradient(circle_at_80%_90%,rgba(56,189,248,0.45),transparent_55%)] opacity-80" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr,1fr] gap-14 items-center">
          <div className="reveal space-y-5 active">
            <p className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[12px] font-semibold">
              🅿️ <span className="punky-title">Punky</span> Compras · Comprá
              mejor, no más caro
            </p>
            <h2
              ref={titleRef}
              className="title-reveal font-display text-3xl md:text-4xl font-bold leading-tight"
            >
              Elegís el producto, <span className="punky-title">Punky</span> te
              ayuda a conseguirlo y ver si podés financiarlo.
            </h2>
            <p
              ref={subtitleRef}
              className="subtitle-reveal text-slate-200 text-sm md:text-base max-w-xl"
            >
              Con <span className="punky-title">Punky</span> Compras podés
              mandar un link de Mercado Libre, una captura de pantalla o
              simplemente describir lo que buscás. El asistente compara
              opciones, te sugiere alternativas de mejor relación precio–calidad
              y te dice si podés pagarlo con{" "}
              <span className="punky-title">Punky</span>
              Créditos.
            </p>

            <ul className="space-y-3 text-sm text-slate-100">
              <li className="flex gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-emerald-400" />
                <span>
                  Mandás: "Quiero una notebook para estudiar" o el link directo
                  del producto.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-emerald-400" />
                <span>
                  <span className="punky-title">Punky</span> revisa reseñas,
                  precio, características clave y te sugiere opciones reales del
                  mercado.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-emerald-400" />
                <span>
                  Si te sirve, conecta con{" "}
                  <span className="punky-title">Punky</span> Créditos para
                  evaluar si podés financiar esa compra desde tu recibo.
                </span>
              </li>
            </ul>

            <div className="pt-3">
              <button
                onClick={() =>
                  openWhatsApp(
                    "Hola Punky, quiero que me ayudes con una compra."
                  )
                }
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-punkyDark text-sm font-semibold hover:bg-slate-100 transition shadow-lg shadow-black/40"
              >
                Enviar mi producto a <span className="punky-title">Punky</span>{" "}
                por WhatsApp
                <span>🛒</span>
              </button>
            </div>
          </div>

          {/* Cards de ejemplo */}
          <div className="reveal delay-150 active">
            <div className="bg-white/10 border border-white/20 rounded-[2rem] p-5 sm:p-6 backdrop-blur shadow-[0_30px_80px_rgba(0,0,0,0.7)] space-y-4">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-300">
                Ejemplo de análisis de compra
              </p>

              <div className="space-y-3 text-[13px]">
                <div className="rounded-2xl bg-black/40 border border-white/15 p-4 flex gap-4 items-center">
                  <div className="w-16 h-16 bg-white/5 border border-white/20 rounded-xl flex items-center justify-center text-2xl">
                    📱
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold text-white">
                      Celular gama media
                    </p>
                    <p className="text-slate-300 text-xs">
                      256 GB · 8 GB RAM · IP68 · Carga rápida
                    </p>
                    <p className="text-emerald-300 text-xs">
                      "Buena relación precio–prestaciones para uso diario y
                      trabajo."
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-slate-200">
                    🧠 <strong>Punky:</strong> "Te encontré 3 opciones similares
                    con mejor garantía y precio. Si querés, calculo si podés
                    financiarlo con tu recibo."
                  </p>
                  <p className="text-[11px] text-slate-400">
                    La idea no es que compres más, sino que compres mejor y
                    sabiendo cómo impacta en tu recibo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComprasPage;
