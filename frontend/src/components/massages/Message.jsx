//message.jsx
import React, { useState,useContext } from "react";
import { socket } from "./../../socketIO/socket"
import { MessagesContext } from "../../hooks/MessageContext";

const SingleMessage = ({ message }) => {
  const storedUserData = localStorage.getItem("currentUser");
  const currentUser = storedUserData ? JSON.parse(storedUserData) : null;
  const {setSelectedConversation} = useContext(MessagesContext);
  const { currentConversation } = useContext(MessagesContext);
  const [t, setT] = useState(0);

  socket.on('newMessageR', async () => {
    // console.log("newMessageR");
    try {
      let obj = {
        sender_no: currentUser.mob_number,
        receiver_no: currentConversation.associated_no
      }
      const response = await fetch('/get-chat', {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch messages');
      }
      const data = await response.json();
      // console.log("data ",data);
      setSelectedConversation(data)
    } catch (error) {
      console.error('Error fetching contact list:', error);
    }
  });
  const changeText = async (event) => {
    event.preventDefault();
    setT((t) => !t);
  };

  return (
    <div className={`chat ${message.sender_name === currentUser.username ? "chat-end" : "chat-start"}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src="https://th.bing.com/th/id/OIP.s9JFNLzEbjoZhjijeA5X-AHaHa?rs=1&pid=ImgDetMain" />
        </div>
      </div>
      <div className="chat-header color-black">
        {message.sender_name}
      </div>
      <div className="chat-bubble">
        {t ? message.translated_content : message.message}
        <button className="px-2 py-1 rounded-full bg-green-500 hover:bg-green-700" onClick={changeText}>
        </button>
      </div>
    </div>
  );
};

const Message = ({ messages, setMessage, clicked }) => {
  messages.sort((a, b) => a.msg_id - b.msg_id);
  return (
    <>
      {messages.map((message, index) => (
        <SingleMessage key={index} message={message} setMessage={setMessage} clicked={clicked} />
      ))}
    </>
  );
};

export default Message;