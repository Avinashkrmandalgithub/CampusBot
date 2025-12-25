import ChatHeader from "../components/chat/ChatHeader.jsx";
import ChatMessages from "../components/chat/ChatMessages.jsx";
import ChatInput from "../components/chat/ChatInput.jsx";

const ChatPage = () => {
  return (
    <div className="flex flex-col flex-1 min-h-0">
      <ChatHeader />
      <ChatMessages />
      <ChatInput />
    </div>
  );
};

export default ChatPage;
