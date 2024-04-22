import React, { createContext, useState } from 'react';
// import messages from './messagedata'
const MessagesContext = createContext({
  messages: [],
  setSelectedConversation: () => {},
});

const MessagesProvider = ({ children }) => {
  const [messages, setMessages] = useState();

  const setSelectedConversation = (conversationMessages) => {
    setMessages(conversationMessages);
  };

  return (
    <MessagesContext.Provider value={{ messages, setSelectedConversation }}>
      {children}
    </MessagesContext.Provider>
  );
};

export { MessagesContext, MessagesProvider };
