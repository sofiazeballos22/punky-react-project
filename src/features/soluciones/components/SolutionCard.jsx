const SolutionCard = ({
  badge,
  title,
  description,
  delay = 0,
  gradientFrom,
  badgeBg,
  badgeText,
  cardRef,
  animationClass = "card-reveal-left",
}) => {
  const delayClass = delay ? `delay-${delay}` : "";

  // Mapeo de colores de gradiente para hover
  const gradientClasses = {
    blue: "from-blue-50",
    emerald: "from-emerald-50",
    orange: "from-orange-50",
    violet: "from-violet-50",
    rose: "from-rose-50",
    slate: "from-slate-50",
  };

  const borderHoverClasses = {
    blue: "hover:border-blue-100",
    emerald: "hover:border-emerald-100",
    orange: "hover:border-orange-100",
    violet: "hover:border-violet-100",
    rose: "hover:border-rose-100",
    slate: "hover:border-slate-100",
  };

  return (
    <div
      ref={cardRef}
      className={`${animationClass} group bg-white p-7 rounded-[1.8rem] shadow-card hover:shadow-xl transition-all duration-100 hover:-translate-y-2 border border-slate-100 ${borderHoverClasses[gradientFrom]} relative overflow-hidden`}
    >
      {/* Background gradient hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradientClasses[gradientFrom]} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-100`}
      />

      {/* Contenido */}
      <div className="relative z-10">
        <p
          className={`inline-flex items-center px-3 py-1 rounded-full ${badgeBg} text-[11px] font-semibold ${badgeText} mb-4 gap-1`}
        >
          {badge.split("Punky").map((part, index, array) =>
            index === 0 ? (
              part
            ) : (
              <span key={index} className="flex items-center gap-1">
                <span className="punky-title">Punky</span>
                {part}
              </span>
            )
          )}
        </p>
        <h3 className="font-display text-xl font-bold mb-3 text-punkyDark">
          {title}
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default SolutionCard;
