import { HelpCircle, MessageSquare, TrendingUp, Users } from "lucide-react";
import StatCard from "./StatCard";

const StatsGrid = () => {
  return (
    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        xl:grid-cols-4
        gap-4
        sm:gap-5
        xl:gap-6
      "
    >
      <StatCard
        title="Total FAQs"
        value="156"
        change="+12% from last week"
        icon={HelpCircle}
        accent="bg-purple-600/20 text-purple-400"
      />

      <StatCard
        title="Queries Today"
        value="234"
        change="+8% from last week"
        icon={MessageSquare}
        accent="bg-cyan-600/20 text-cyan-400"
      />

      <StatCard
        title="Most Asked"
        value="Exams"
        change="45 queries today"
        icon={TrendingUp}
        accent="bg-indigo-600/20 text-indigo-400"
      />

      <StatCard
        title="Active Users"
        value="89"
        change="+15% from last week"
        icon={Users}
        accent="bg-purple-600/20 text-purple-400"
      />
    </div>
  );
};

export default StatsGrid;
