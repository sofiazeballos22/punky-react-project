import { openWhatsApp } from "@/utils/whatsapp";
import SolutionCard from "../components/SolutionCard";
import useTitleReveal from "@/hooks/useTitleReveal";
import useCardReveal from "@/hooks/useCardReveal";

const SolucionesPage = () => {
  const { titleRef, subtitleRef } = useTitleReveal();
  const cardRefs = useCardReveal(6, 450); // 6 cards con delay de 450ms
  const solutions = [
    {
      badge: "🅿️  Punky  Fuerzas",
      title: "Fuerzas Armadas y de Seguridad",
      description:
        "Normativa oficial, recibos de haberes, descuentos, obra social y trámites internos. Reglas específicas por fuerza y protocolo claro para crédito por Decreto 1412.",
      gradientFrom: "blue",
      badgeBg: "bg-blue-50",
      badgeText: "text-blue-700",
      delay: 0,
    },
    {
      badge: "🅿️  Punky  Créditos",
      title: "Crédito por recibo o CBU",
      description:
        "Análisis de disponible al instante, sin hojas de cálculo. Explicación de montos, cuotas y límites. Acompañamiento hasta la firma, siempre que sea conveniente para vos.",
      gradientFrom: "emerald",
      badgeBg: "bg-emerald-50",
      badgeText: "text-emerald-700",
      delay: 50,
    },
    {
      badge: "🅿️  Punky  Abuelos",
      title: "Jubilados y pensionados",
      description:
        "Explicaciones lentas, claras y sin letra chica. Haberes, descuentos, obras sociales, turnos, reclamos y defensa ante cobros indebidos.",
      gradientFrom: "orange",
      badgeBg: "bg-orange-50",
      badgeText: "text-orange-700",
      delay: 100,
    },
    {
      badge: "🅿️ Trámites Inteligentes",
      title: "Trámites nacionales y provinciales",
      description:
        "Punky traduce el lenguaje estatal a castellano simple: qué formulario, qué link, qué turno y qué hacer si algo sale mal.",
      gradientFrom: "violet",
      badgeBg: "bg-violet-50",
      badgeText: "text-violet-700",
      delay: 150,
    },
    {
      badge: "🅿️ Defensa del Consumidor",
      title: "Compras, bancos y estafas",
      description:
        "Compras no entregadas, cargos raros, tarjetas, homebanking y estafas online. Punky te dice qué capturas guardar y dónde reclamar.",
      gradientFrom: "rose",
      badgeBg: "bg-rose-50",
      badgeText: "text-rose-700",
      delay: 200,
    },
    {
      badge: "🅿️ Legal · 🅿️ Contable · 🅿️ Fraudes",
      title: "Tus temas legales y de impuestos, en simple",
      description:
        "Monotributo, AFIP, ARCA, contratos básicos y dudas legales frecuentes. Primera orientación y organización de tu caso para que llegues mejor a tu profesional.",
      gradientFrom: "slate",
      badgeBg: "bg-slate-50",
      badgeText: "text-slate-700",
      delay: 250,
    },
  ];

  return (
    <section
      id="soluciones"
      className="bg-slate-50/70 py-24 px-6 md:px-12 relative z-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2
            ref={titleRef}
            className="title-reveal font-display text-3xl md:text-4xl font-bold mb-4 text-punkyDark"
          >
            Un solo <span className="punky-title">Punky</span>, muchas
            soluciones
          </h2>
          <p
            ref={subtitleRef}
            className="subtitle-reveal text-lg text-slate-600"
          >
            <span className="punky-title">Punky</span> integra todos tus mundos:
            sueldo, fuerza, jubilación, compras online, impuestos y derechos
            como consumidor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-8">
          {solutions.map((solution, index) => {
            // Primera fila (0,1,2): izquierda a derecha
            // Segunda fila (3,4,5): derecha a izquierda
            const isFirstRow = index < 3;
            const animationClass = isFirstRow
              ? "card-reveal-left"
              : "card-reveal-right";

            return (
              <SolutionCard
                key={index}
                {...solution}
                cardRef={cardRefs[index]}
                animationClass={animationClass}
              />
            );
          })}
        </div>

        <div className="mt-12 text-center reveal active">
          <button
            onClick={() =>
              openWhatsApp("Hola Punky, quiero que me ayudes con varios temas.")
            }
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-punkyDark text-white text-sm font-semibold hover:bg-black transition shadow-lg shadow-slate-900/15"
          >
            Abrir chat de WhatsApp con Punky
          </button>
        </div>
      </div>
    </section>
  );
};

export default SolucionesPage;
