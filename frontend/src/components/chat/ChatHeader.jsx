import {
  GraduationCap,
  Newspaper,
  CreditCard,
  Calendar,
  MessageSquare,
} from "lucide-react";

const QuickAction = ({ icon: Icon, label }) => (
  <button className="flex items-center gap-2 bg-[#1a162d]/80 border border-gray-700 px-4 py-2 rounded-lg text-white hover:border-cyan-400 transition">
    <Icon size={16} className="text-cyan-400" />
    <span className="text-sm">{label}</span>
  </button>
);

const ChatHeader = () => {
  return (
    <header className="p-6 z-10">
      {/* Bot Info */}
      <div className="flex items-center gap-3">
        <div className="relative">
          <div className="bg-blue-600 p-2 rounded-xl">
            <GraduationCap size={28} />
          </div>
          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#0a0518] rounded-full" />
        </div>

        <div>
          <h2 className="text-xl font-bold">
            CampusBot <span className="text-cyan-400 text-sm">✨</span>
          </h2>
          <p className="text-xs text-gray-400">
            AI-Powered Brainware University Assistant
          </p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8">
        <p className="text-xs text-gray-400 mb-3">Quick actions</p>
        <div className="flex gap-3 flex-wrap">
          <QuickAction icon={Newspaper} label="Exams" />
          <QuickAction icon={CreditCard} label="Fees" />
          <QuickAction icon={Calendar} label="Events" />
          <QuickAction icon={MessageSquare} label="Admissions" />
        </div>
      </div>
    </header>
  );
};

export default ChatHeader;
