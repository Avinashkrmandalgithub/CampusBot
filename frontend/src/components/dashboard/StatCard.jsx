const StatCard = ({ title, value, change, icon: Icon, accent }) => {
  return (
    <div
      className="
        bg-white/5 border border-white/10
        rounded-xl
        p-4 sm:p-5
        flex items-center justify-between
        gap-3
      "
    >
      {/* Left content */}
      <div className="min-w-0">
        <p className="text-[11px] sm:text-sm text-gray-400 truncate">{title}</p>

        <h2 className="text-xl sm:text-3xl font-bold leading-tight mt-1">
          {value}
        </h2>

        {change && (
          <p className="text-[10px] sm:text-xs text-green-400 mt-1">{change}</p>
        )}
      </div>

      {/* Icon */}
      <div
        className={`
          shrink-0
          p-2.5 sm:p-3
          rounded-lg
          ${accent}
        `}
      >
        <Icon size={18} className="opacity-90" />
      </div>
    </div>
  );
};

export default StatCard;
