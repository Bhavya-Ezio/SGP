import React, { useState } from "react";
import socket from "../../socketIO/socket";

const SingleMessage = ({ message }) => {
  const [unread, setUnread] = useState(true);
  const storedUserData = localStorage.getItem("currentUser");
  const currentUser = storedUserData ? JSON.parse(storedUserData) : null;
  const [t, setT] = useState(0);

  const changeText = async (event) => {
    event.preventDefault();
    setT((t) => !t);
  };

  useEffect(() => {
    const handleNewMessage = (newMessage) => {
      // Check if the new message belongs to this component
      if (newMessage.sender_no === message.sender_no) {
        setUnread(true);
      }
    };
    socket.on("new-message", handleNewMessage);

    return () => {
      socket.off("new-message", handleNewMessage);
    };
  }, [message.sender_no]);

  const toggleUnread = () => {
    setUnread(false);
    // Perform any other actions, like marking the message as read in backend
  };

  return (
    <div className={`chat ${unread ? "unread" : ""}`}>
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
      {unread && <div className="unread-badge">New</div>}
    </div >
  );
};

const Message = ({ messages, setMessage, clicked }) => {

  return (
    <>
      {messages.map((message, index) => (
        <SingleMessage key={index} message={message} setMessage={setMessage} clicked={clicked} />
      ))}
    </>
  );
};

export default Message;