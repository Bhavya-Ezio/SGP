import React, { createContext, useState } from 'react';

const MessagesContext = createContext({
  messages: [],
  setSelectedConversation: () => {},
  currentConversation: null,
  setCurrentConversation: (username) => {},
});

const MessagesProvider = ({ children }) => {
  const [messages, setMessages] = useState();
  const [currentConversation, setCurrentConversation] = useState(null);

  const setSelectedConversation = (conversationMessages) => {
    setMessages(conversationMessages);
  };

  return (
    <MessagesContext.Provider value={{ messages, setSelectedConversation, currentConversation , setCurrentConversation, }}>
      {children}
    </MessagesContext.Provider>
  );
};

export { MessagesContext, MessagesProvider };
