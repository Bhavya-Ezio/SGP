import React from "react";

const Message = ({ messages }) => {
  return (
    <>
      {messages.map((message, index) => (
        <div key={index} className={`chat ${true ? "chat-end" : "chat-start"}`}>
          <div className="chat-image avatar">
          <div className="w-10 rounded-full">
               <img src="https://th.bing.com/th/id/OIP.s9JFNLzEbjoZhjijeA5X-AHaHa?rs=1&pid=ImgDetMain"/>
          </div>
          </div>
          <div className="chat-header">
            {message.sender_no}  {/* Assuming sender_no represents the sender's name */}
          </div>
          <div className="chat-bubble">
            {message.content}
          </div>
        </div>
      ))}
    </>
  );
};

export default Message;
