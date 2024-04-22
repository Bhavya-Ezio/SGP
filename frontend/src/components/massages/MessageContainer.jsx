import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { useContext } from "react";
import useCurrentConversation from "../../hooks/useCurrentConversation";
// import messages from "./messagedata";
import { MessagesContext } from "../../hooks/MessageContext";

const MessageContainer = () => {
  const { messages } = useContext(MessagesContext);
  const { currentConversation } = useCurrentConversation();

  return (
    <div className="md:min-w-[450px] flex flex-col relative h-screen overflow-auto">
      {/* Header */}
      <div className="bg-slate-500 px-4 py-2 mb-2">
        <span className="label-text">To:</span> 
        <span className="text-gray-900 font-bold">{currentConversation}</span>
      </div>
      {messages && messages.length > 0 ? ( // Check if messages exist and have elements
        <Messages messages={messages} />
      ) : (
        <div className="text-center p-4">Select a conversation to view messages.</div>
      )}
      
      <MessageInput />
    </div>
  );
};

export default MessageContainer;
