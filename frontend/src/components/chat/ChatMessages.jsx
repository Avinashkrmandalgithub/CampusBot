import { GraduationCap } from "lucide-react";

const ChatMessages = () => {
  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-6 z-10">
      {/* Bot Message */}
      <div className="flex items-start gap-4 max-w-3xl">
        <div className="mt-1 bg-cyan-900/30 p-2 rounded-lg border border-cyan-500/50">
          <GraduationCap size={20} className="text-cyan-400" />
        </div>

        <div>
          <div className="bg-blue-900/20 border border-white/10 p-4 rounded-2xl rounded-tl-none backdrop-blur">
            <p className="text-sm text-gray-200 leading-relaxed">
              Hello! 👋 I'm CampusBot, your AI-powered Brainware university assistant. I
              can help you with exams, fees, admissions, events, and more. How
              can I help you today?
            </p>
          </div>

          <div className="flex gap-3 mt-1 text-[10px]">
            <span className="text-cyan-400 font-medium">✨ CAMPUSBOT</span>
            <span className="text-gray-500">10:37 AM</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessages;
