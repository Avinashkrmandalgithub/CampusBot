import { BotMessageSquare, User } from "lucide-react";

const TypingDots = () => (
  <div className="flex gap-1">
    <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" />
    <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-150" />
    <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-300" />
  </div>
);

const ChatMessages = () => {
  return (
    <div className="flex-1 overflow-y-auto px-3 sm:px-6 py-6 space-y-6 z-10">
      {/* AI MESSAGE */}
      <div className="flex items-start gap-3 max-w-full sm:max-w-3xl">
        <div className="mt-1 bg-cyan-900/30 p-2 rounded-lg border border-cyan-500/50 shrink-0">
          <BotMessageSquare size={18} className="text-cyan-400" />
        </div>

        <div className="flex-1">
          <div className="bg-blue-900/20 border border-white/10 p-4 rounded-2xl rounded-tl-none backdrop-blur">
            <p className="text-sm text-gray-200 leading-relaxed">
              I am Brainware University Assistant, your helpdesk support for all
              queries.
            </p>
          </div>
          <div className="flex gap-2 mt-1 text-[10px]">
            <span className="text-cyan-400 font-medium">✨ CAMPUSBOT</span>
            <span className="text-gray-500">10:37 AM</span>
          </div>
        </div>
      </div>

      {/* USER MESSAGE */}
      <div className="flex justify-end gap-3 max-w-full sm:max-w-3xl ml-auto">
        <div className="flex flex-col items-end flex-1">
          <div className="bg-linear-to-r from-purple-600 to-cyan-500 p-4 rounded-2xl rounded-br-none shadow-lg w-full sm:w-auto">
            <p className="text-sm text-white">When are the semester exams?</p>
          </div>
          <span className="text-[10px] text-gray-400 mt-1">10:36 AM</span>
        </div>

        <div className="w-9 h-9 flex items-center justify-center rounded-full bg-purple-600/20 border border-purple-500/40 shrink-0">
          <User size={18} className="text-purple-400" />
        </div>
      </div>

      {/* AI TYPING */}
      <div className="flex items-start gap-3 max-w-full sm:max-w-3xl">
        <div className="mt-1 bg-cyan-900/30 p-2 rounded-lg border border-cyan-500/50 shrink-0">
          <BotMessageSquare size={18} className="text-cyan-400" />
        </div>

        <div className="bg-blue-900/20 border border-white/10 p-4 rounded-2xl rounded-tl-none backdrop-blur">
          <TypingDots />
        </div>
      </div>
    </div>
  );
};

export default ChatMessages;
