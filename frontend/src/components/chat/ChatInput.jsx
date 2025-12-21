import { Paperclip, Send, Mic } from "lucide-react";

const ChatInput = () => {
  return (
    <footer className="p-6 z-10">
      <div className="max-w-4xl mx-auto flex items-center gap-3 bg-[#16122a]/90 border border-white/10 rounded-2xl p-2 pl-4 backdrop-blur">
        <Paperclip
          size={20}
          className="text-gray-400 cursor-pointer hover:text-white"
        />

        <input
          type="text"
          placeholder="Type your question..."
          className="flex-1 bg-transparent outline-none text-sm text-gray-200 placeholder-gray-500"
        />

        <button className="p-2 text-purple-400 hover:text-purple-300">
          <Send size={20} />
        </button>

        <button className="bg-cyan-600 hover:bg-cyan-500 p-2 rounded-full">
          <Mic size={20} className="text-white" />
        </button>
      </div>
    </footer>
  );
};

export default ChatInput;
