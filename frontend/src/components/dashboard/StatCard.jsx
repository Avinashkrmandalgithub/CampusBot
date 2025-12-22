const StatCard = ({ title, value, change, icon: Icon, accent }) => {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-5 flex justify-between items-center">
      <div>
        <p className="text-xs sm:text-sm text-gray-400">{title}</p>
        <h2 className="text-2xl sm:text-3xl font-bold mt-1">{value}</h2>
        {change && (
          <p className="text-[10px] sm:text-xs text-green-400 mt-1">{change}</p>
        )}
      </div>

      <div className={`p-3 rounded-lg ${accent}`}>
        <Icon size={20} />
      </div>
    </div>
  );
};

export default StatCard;
