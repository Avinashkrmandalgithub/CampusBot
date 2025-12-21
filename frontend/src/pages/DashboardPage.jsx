import {
  LayoutDashboard,
  HelpCircle,
  MessageSquare,
  Users,
  TrendingUp,
  Calendar,
  FileText,
} from "lucide-react";

const StatCard = ({ title, value, change, icon: Icon, accent }) => (
  <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex justify-between items-center">
    <div>
      <p className="text-sm text-gray-400">{title}</p>
      <h2 className="text-3xl font-bold mt-1">{value}</h2>
      {change && <p className="text-xs text-green-400 mt-1">{change}</p>}
    </div>
    <div className={`p-3 rounded-lg ${accent}`}>
      <Icon size={22} />
    </div>
  </div>
);

const ProgressRow = ({ label, value, max = 50 }) => {
  const width = `${(value / max) * 100}%`;

  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span>{label}</span>
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

const DashboardPage = () => {
  return (
    <div className="p-6 z-10 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="p-3 rounded-xl bg-purple-600/20">
          <LayoutDashboard className="text-purple-400" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-gray-400">
            Overview of CampusBot activity and content
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
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

      {/* Middle Section */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Recent Updates */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-5">
          <h3 className="text-lg font-semibold mb-4">Recent Updates</h3>

          <ul className="space-y-4">
            <li className="flex justify-between">
              <span>
                <span className="text-xs bg-purple-600 px-2 py-0.5 rounded-full mr-2">
                  News
                </span>
                Semester Results Announced
              </span>
              <span className="text-xs text-gray-400">2 hours ago</span>
            </li>

            <li className="flex justify-between">
              <span>
                <span className="text-xs bg-cyan-600 px-2 py-0.5 rounded-full mr-2">
                  Event
                </span>
                Tech Fest 2025 Registration Open
              </span>
              <span className="text-xs text-gray-400">5 hours ago</span>
            </li>

            <li className="flex justify-between">
              <span>
                <span className="text-xs border border-white/20 px-2 py-0.5 rounded-full mr-2">
                  FAQ
                </span>
                Updated Fee Payment Process
              </span>
              <span className="text-xs text-gray-400">1 day ago</span>
            </li>

            <li className="flex justify-between">
              <span>
                <span className="text-xs bg-purple-600 px-2 py-0.5 rounded-full mr-2">
                  News
                </span>
                New Library Hours
              </span>
              <span className="text-xs text-gray-400">2 days ago</span>
            </li>
          </ul>
        </div>

        {/* Top Queries */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-5">
          <h3 className="text-lg font-semibold mb-4">Top Queries</h3>

          <div className="space-y-4">
            <ProgressRow label="Exam schedule" value={45} />
            <ProgressRow label="Fee payment" value={38} />
            <ProgressRow label="Admission process" value={32} />
            <ProgressRow label="Hostel facilities" value={28} />
            <ProgressRow label="Placement info" value={24} />
          </div>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex gap-4 items-center">
          <HelpCircle className="text-purple-400" />
          <div>
            <h4 className="font-semibold">Manage FAQs</h4>
            <p className="text-sm text-gray-400">
              Add, edit or remove FAQ entries
            </p>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex gap-4 items-center">
          <FileText className="text-cyan-400" />
          <div>
            <h4 className="font-semibold">Post News</h4>
            <p className="text-sm text-gray-400">
              Share latest university updates
            </p>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex gap-4 items-center">
          <Calendar className="text-purple-400" />
          <div>
            <h4 className="font-semibold">Create Event</h4>
            <p className="text-sm text-gray-400">Schedule campus events</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
