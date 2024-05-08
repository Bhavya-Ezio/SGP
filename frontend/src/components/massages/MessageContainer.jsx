import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { useContext } from "react";
import { MessagesContext } from "../../hooks/MessageContext";
import './msg.css';

const MessageContainer = () => {
  const { messages } = useContext(MessagesContext);
  const { currentConversation } = useContext(MessagesContext);

  return (
    <div className="flex flex-col cherry">
      {/* Header */}
      <div className="bg-slate-500 px-4 py-2 mb-2">
        <span className="label-text-black">To:</span>
        <span className="text-gray-900 font-bold">{currentConversation ? currentConversation.username : ""}</span>
      </div>
      {currentConversation !=null ? ( // Check if messages exist and have elements
        <div className="text-center p-4">
          <Messages messages={messages} />  {/* Render Messages */}
          <div className="absolute bottom-0 w-100%">
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
