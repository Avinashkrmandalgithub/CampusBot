import ChatHeader from "../components/chat/ChatHeader.jsx";
import ChatMessages from "../components/chat/ChatMessages.jsx";
import ChatInput from "../components/chat/ChatInput.jsx";

const ChatPage = () => {
  return (
    <div className="flex flex-col flex-1 h-full overflow-hidden">
      <ChatHeader /> 
      <ChatMessages /> 
      <ChatInput /> 
    </div>
  );
};

export default ChatPage;
