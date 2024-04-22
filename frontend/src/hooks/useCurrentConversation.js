import { useState, useContext,useEffect } from "react";
import { MessagesContext } from "./MessageContext";

const useCurrentConversation = () => {
  const { messages } = useContext(MessagesContext);
  const [currentConversation, setCurrentConversation] = useState(null);

  useEffect(() => {
    // Update currentConversation when messages change
    if (messages && messages.length > 0) {
      // Assuming the first message object contains receiver information
      const receiver = messages[0].receiver_no; // Replace with appropriate property
      setCurrentConversation(receiver);
    } else {
      setCurrentConversation(null);
    }
  }, [messages]);

  return { currentConversation, setCurrentConversation };
};

export default useCurrentConversation;
