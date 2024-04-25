import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { useContext } from "react";
import { MessagesContext } from "../../hooks/MessageContext";

const MessageContainer = () => {
  const { messages } = useContext(MessagesContext);
  const { currentConversation } = useContext(MessagesContext);

  return (
    <div className="md:min-w-[450px] flex flex-col relative h-screen overflow-auto">
      {/* Header */}
      <div className="bg-slate-500 px-4 py-2 mb-2">
        <span className="label-text">To:</span>
        <span className="text-gray-900 font-bold">{currentConversation ? currentConversation.username : ""}</span>
      </div>
      {messages && messages.length > 0 ? ( // Check if messages exist and have elements
        <div>
          <div className="text-center p-4">
            <Messages messages={messages} />  {/* Render Messages */}
          </div>
          <div>
            <MessageInput />
          </div>
        </div>  
      ) : (
        <div className="text-center p-4">Select a conversation to view messages.</div>
      )}

    </div>
  );
};

export default MessageContainer;
