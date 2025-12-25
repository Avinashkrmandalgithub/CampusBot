import { LayoutDashboard } from "lucide-react";

const DashboardHeader = () => {
  return (
    <header
      className="
        flex flex-col gap-3
        sm:flex-row sm:items-center sm:justify-between
      "
    >
      {/* Left: Icon + Title */}
      <div className="flex items-center gap-3">
        <div
          className="
            p-3 rounded-xl
            bg-purple-500/20
            border border-purple-400/30
            shrink-0
          "
        >
          <LayoutDashboard size={22} className="text-purple-300" />
        </div>

        <div>
          <h1 className="text-2xl sm:text-3xl font-bold leading-tight">
            Dashboard
          </h1>
          <p className="text-xs sm:text-sm text-gray-400 mt-0.5">
            Overview of CampusBot activity and content
          </p>
        </div>
      </div>

      {/* Right: (future-ready actions placeholder) */}
      {/* 
      <div className="flex gap-2">
        <button className="px-3 py-2 text-sm bg-white/5 border border-white/10 rounded-lg">
          Export
        </button>
      </div>
      */}
    </header>
  );
};

export default DashboardHeader;
