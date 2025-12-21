import { Paperclip, Send, Mic } from "lucide-react";

const ChatInput = () => {
  return (
    <footer className="sticky bottom-0 p-3 sm:p-6 z-10 ">
      <div
        className="
          max-w-4xl mx-auto
          flex items-center gap-2 sm:gap-3
          bg-[#16122a]/90
          border border-white/10
          rounded-2xl
          p-2 pl-3 sm:pl-4
          backdrop-blur
          focus-within:border-cyan-400
          transition
        "
      >
        <Paperclip
          size={18}
          className="text-gray-400 cursor-pointer hover:text-white"
        />

        <input
          type="text"
          placeholder="Ask CampusBot anything..."
          className="flex-1 bg-transparent outline-none text-sm text-gray-200 placeholder-gray-500"
        />

        <button className="p-2 text-purple-400 hover:text-purple-300 active:scale-95 transition">
          <Send size={18} />
        </button>

        <button className="bg-cyan-600 hover:bg-cyan-500 p-2 rounded-full transition active:scale-95">
          <Mic size={18} className="text-white" />
        </button>
      </div>
    </footer>
  );
};

export default ChatInput;
