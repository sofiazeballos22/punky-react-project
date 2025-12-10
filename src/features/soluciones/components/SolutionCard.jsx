const SolutionCard = ({ badge, title, description, delay = 0, gradientFrom, badgeBg, badgeText }) => {
  const delayClass = delay ? `delay-${delay}` : '';
  
  return (
    <div 
      className={`reveal ${delayClass} group bg-white p-7 rounded-[1.8rem] shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 hover:border-${gradientFrom}-100 relative overflow-hidden active`}
    >
      {/* Background gradient hover - mantener en todas las cards */}
      <div className={`absolute inset-0 bg-gradient-to-br from-${gradientFrom}-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      
      {/* Contenido con transform para mantener texto estático */}
      <div className="relative z-10" style={{ transform: 'translateZ(0)' }}>
        <p className={`inline-flex items-center px-3 py-1 rounded-full ${badgeBg} text-[11px] font-semibold ${badgeText} mb-4`}>
          {badge}
        </p>
        <h3 className="font-display text-xl font-bold mb-3 text-punkyDark">
          {title}
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SolutionCard;
