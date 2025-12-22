const updates = [
  ["News", "Semester Results Announced", "2 hours ago", "bg-purple-600"],
  ["Event", "Tech Fest 2025 Registration Open", "5 hours ago", "bg-cyan-600"],
  ["FAQ", "Updated Fee Payment Process", "1 day ago", "border border-white/20"],
  ["News", "New Library Hours", "2 days ago", "bg-purple-600"],
];

const RecentUpdates = () => {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-5">
      <h3 className="text-lg font-semibold mb-4">Recent Updates</h3>

      <ul className="space-y-4 text-sm">
        {updates.map(([tag, text, time, badge], i) => (
          <li
            key={i}
            className="flex flex-col sm:flex-row sm:justify-between gap-2"
          >
            <span className="flex items-center gap-2">
              <span className={`text-xs px-2 py-0.5 rounded-full ${badge}`}>
                {tag}
              </span>
              <span className="truncate">{text}</span>
            </span>
            <span className="text-xs text-gray-400">{time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentUpdates;
