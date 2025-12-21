import ChatHeader from "../components/chat/ChatHeader.jsx";
import ChatMessages from "../components/chat/ChatMessages.jsx";
import ChatInput from "../components/chat/ChatInput.jsx";

const ChatPage = () => {
  return (
    <>
      <ChatHeader />
      <ChatMessages />
      <ChatInput />
    </>
  );
};

export default ChatPage;
