import { LayoutDashboard } from "lucide-react";

const DashboardHeader = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-3">
      <div className="p-3 rounded-xl bg-purple-600/20 w-fit">
        <LayoutDashboard className="text-purple-400" />
      </div>

      <div>
        <h1 className="text-2xl sm:text-3xl font-bold">Dashboard</h1>
        <p className="text-sm text-gray-400">
          Overview of CampusBot activity and content
        </p>
      </div>
    </div>
  );
};

export default DashboardHeader;
