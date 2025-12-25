import DashboardHeader from "../components/dashboard/DashboardHeader";
import StatsGrid from "../components/dashboard/StatsGrid";
import RecentUpdates from "../components/dashboard/RecentUpdates";
import TopQueries from "../components/dashboard/TopQueries";
import QuickActions from "../components/dashboard/QuickActions";

const DashboardPage = () => {
  return (
    <section
      className="
        flex flex-col
        flex-1
        px-4 sm:px-6
        py-4 sm:py-6
        space-y-6
      "
    >
      {/* Header */}
      <DashboardHeader />

      {/* Stats */}
      <StatsGrid />

      {/* Middle section */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <RecentUpdates />
        <TopQueries />
      </div>

      {/* Actions */}
      <QuickActions />
    </section>
  );
};

export default DashboardPage;
