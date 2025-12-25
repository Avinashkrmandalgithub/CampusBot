const ProgressRow = ({ label, value, max = 50 }) => {
  const percent = Math.min((value / max) * 100, 100);

  return (
    <div className="space-y-1.5">
      {/* Label Row */}
      <div className="flex justify-between items-center text-xs sm:text-sm">
        <span className="truncate text-gray-200">{label}</span>
        <span className="text-gray-400 shrink-0">{value}</span>
      </div>

      {/* Progress Bar */}
      <div
        className="
          h-2.5
          bg-white/10
          rounded-full
          overflow-hidden
        "
      >
        <div
          className="
            h-full
            rounded-full
            bg-linear-to-r from-purple-500 to-cyan-400
            transition-all duration-500 ease-out
          "
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressRow;
