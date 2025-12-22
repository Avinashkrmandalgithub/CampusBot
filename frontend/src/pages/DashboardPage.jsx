import DashboardHeader from "../components/dashboard/DashboardHeader";
import StatsGrid from "../components/dashboard/StatsGrid";
import RecentUpdates from "../components/dashboard/RecentUpdates";
import TopQueries from "../components/dashboard/TopQueries";
import QuickActions from "../components/dashboard/QuickActions";

const DashboardPage = () => {
  return (
    <div className="p-4 sm:p-6 z-10 space-y-6">
      <DashboardHeader />
      <StatsGrid />

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <RecentUpdates />
        <TopQueries />
      </div>

      <QuickActions />
    </div>
  );
};

export default DashboardPage;
