const updates = [
  ["News", "Semester Results Announced", "2 hours ago", "purple"],
  ["Event", "Tech Fest 2025 Registration Open", "5 hours ago", "cyan"],
  ["FAQ", "Updated Fee Payment Process", "1 day ago", "gray"],
  ["News", "New Library Hours", "2 days ago", "purple"],
];

const badgeStyles = {
  purple: "bg-purple-500/20 text-purple-300 border border-purple-400/30",
  cyan: "bg-cyan-500/20 text-cyan-300 border border-cyan-400/30",
  gray: "bg-white/10 text-gray-300 border border-white/20",
};

const RecentUpdates = () => {
  return (
    <section
      className="
        bg-white/5
        border border-white/10
        rounded-xl
        p-4 sm:p-5
        flex flex-col
      "
    >
      {/* Header */}
      <h3 className="text-lg font-semibold mb-4">Recent Updates</h3>

      {/* List */}
      <ul className="space-y-4 text-sm">
        {updates.map(([tag, text, time, color], i) => (
          <li
            key={i}
            className="
              flex flex-col gap-2
              sm:flex-row sm:items-center sm:justify-between
              border-b border-white/5 pb-3 last:border-none last:pb-0
            "
          >
            {/* Left */}
            <div className="flex items-center gap-2 min-w-0">
              <span
                className={`
                  text-xs px-2 py-0.5 rounded-full shrink-0
                  ${badgeStyles[color]}
                `}
              >
                {tag}
              </span>

              <span className="text-gray-200 truncate">{text}</span>
            </div>

            {/* Right */}
            <span className="text-xs text-gray-400 shrink-0">{time}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RecentUpdates;
