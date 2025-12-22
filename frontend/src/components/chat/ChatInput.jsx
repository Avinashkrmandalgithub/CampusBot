import { useState } from "react";
import { Paperclip, Send, Mic } from "lucide-react";
import { useChatStore } from "../../store/useChatStore";

const ChatInput = () => {
  const [input, setInput] = useState("");
  const { sendMessage, loading } = useChatStore();

  const handleSend = () => {
    if (!input.trim()) return;
    sendMessage(input);
    setInput("");
  };

  return (
    <footer className="sticky bottom-0 p-3 sm:p-6 z-10">
      <div className="max-w-4xl mx-auto flex items-center gap-2 bg-[#16122a]/90 border border-white/10 rounded-2xl p-2 backdrop-blur">
        <Paperclip size={18} className="text-gray-400" />

        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Ask CampusBot anything..."
          className="flex-1 bg-transparent outline-none text-sm text-gray-200"
        />

        <button
          disabled={loading}
          onClick={handleSend}
          className="p-2 text-purple-400 hover:text-purple-300"
        >
          <Send size={18} />
        </button>

        <button className="bg-cyan-600 p-2 rounded-full">
          <Mic size={18} />
        </button>
      </div>
    </footer>
  );
};

export default ChatInput;
