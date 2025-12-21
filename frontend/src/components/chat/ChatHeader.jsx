import {
  BotMessageSquare,
  Sparkles,
  Newspaper,
  CreditCard,
  Calendar,
  MessageSquare,
} from "lucide-react";

const QuickAction = ({ icon: Icon, label }) => (
  <button
    className="
      group flex items-center gap-1.5
      border border-white/10
      px-3 py-1.5 rounded-md
      text-white text-xs
      transition-all duration-200
      hover:border-cyan-400 hover:bg-white/10
    "
  >
    <Icon size={14} className="text-cyan-400" />
    <span className="hidden sm:inline">{label}</span>
  </button>
);

const ChatHeader = () => {
  return (
    <div className="sticky top-4 sm:top-2 z-20 px-3 sm:px-4 mt-2 sm:mt-0">
      <header
        className="
          max-w-6xl mx-auto
          bg-[#0a0518]/65 backdrop-blur-xl
          border border-white/10
          rounded-xl
          px-3 py-2 sm:px-4 sm:py-3
          shadow-lg shadow-black/30
        "
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          {/* Bot Info */}
          <div className="flex items-center gap-3">
            <div className="relative shrink-0">
              <div className="bg-linear-to-br from-cyan-400 to-purple-600 p-1.5 rounded-lg">
                <BotMessageSquare size={20} className="text-white" />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 border border-[#0a0518] rounded-full" />
            </div>

            <div className="leading-tight">
              <h2 className="flex items-center gap-1.5 text-sm font-extrabold">
                <span className="bg-linear-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                  CampusBot
                </span>
                <Sparkles size={12} className="text-cyan-400 animate-pulse" />
              </h2>
              <p className="text-[10px] text-gray-400 hidden sm:block">
                Brainware University AI Assistant
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex gap-2 flex-wrap">
            <QuickAction icon={Newspaper} label="Exams" />
            <QuickAction icon={CreditCard} label="Fees" />
            <QuickAction icon={Calendar} label="Events" />
            <QuickAction icon={MessageSquare} label="Admissions" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default ChatHeader;
