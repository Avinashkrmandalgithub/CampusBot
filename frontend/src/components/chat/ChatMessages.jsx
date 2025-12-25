import { useEffect, useRef } from "react";
import { BotMessageSquare, User } from "lucide-react";
import { useChatStore } from "../../store/useChatStore";

const TypingDots = () => (
  <div className="flex gap-1">
    <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" />
    <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-150" />
    <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-300" />
  </div>
);

const ChatMessages = () => {
  const { messages, loading } = useChatStore();
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  return (
    <div className="flex-1 min-h-0 overflow-y-auto no-scrollbar px-3 sm:px-6 py-4 space-y-5">
      {messages.map((m, i) =>
        m.role === "user" ? (
          <div key={i} className="flex justify-end gap-3 max-w-3xl ml-auto">
            <div className="bg-linear-to-r from-purple-600 to-cyan-500 p-4 rounded-2xl rounded-br-none">
              <p className="text-sm text-white">{m.text}</p>
            </div>
            <div
              className="
                w-9 h-9
                flex items-center justify-center
                rounded-full
               bg-purple-600/20
                border border-purple-500/40
                shrink-0
                "
            >
              <User size={18} className="text-purple-400" />
            </div>
          </div>
        ) : (
          <div key={i} className="flex gap-3 max-w-3xl">
            <div
              className="
              w-9 h-9
              flex items-center justify-center
              rounded-full
             bg-cyan-900/30
              border border-cyan-500/40
              shrink-0
              "
            >
              <BotMessageSquare size={18} className="text-cyan-400" />
            </div>

            <div className="bg-blue-900/20 border border-white/10 p-4 rounded-2xl rounded-tl-none">
              <p className="text-sm">{m.text}</p>
            </div>
          </div>
        )
      )}

      {loading && (
        <div className="flex gap-3 max-w-3xl">
          <div className="bg-cyan-900/30 p-2 rounded-lg">
            <BotMessageSquare size={18} />
          </div>
          <div className="bg-blue-900/20 p-4 rounded-2xl">
            <TypingDots />
          </div>
        </div>
      )}

      <div ref={bottomRef} />
    </div>
  );
};

export default ChatMessages;
