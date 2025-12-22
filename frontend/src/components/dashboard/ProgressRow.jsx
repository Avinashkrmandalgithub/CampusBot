const ProgressRow = ({ label, value, max = 50 }) => {
  const width = `${(value / max) * 100}%`;

  return (
    <div>
      <div className="flex justify-between text-xs sm:text-sm mb-1">
        <span className="truncate">{label}</span>
        <span className="text-gray-400">{value}</span>
      </div>

      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-linear-to-r from-purple-500 to-cyan-400"
          style={{ width }}
        />
      </div>
    </div>
  );
};

export default ProgressRow;
