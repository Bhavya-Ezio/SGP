import React from "react";

const Message = ({ messages }) => {
  let t=0;
  const changeText=async(event)=>{
    event.preventDefault();
    t=(t===0)?1:0
    // console.log(t);
  }
  const storedUserData = localStorage.getItem('currentUser');
  const currentUser = storedUserData ? JSON.parse(storedUserData) : null;
  return (
    <>
      {messages.map((message, index) => (
        <div key={index} className={`chat ${message.sender_name === currentUser.username ? "chat-end" : "chat-start"}`}>
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img src="https://th.bing.com/th/id/OIP.s9JFNLzEbjoZhjijeA5X-AHaHa?rs=1&pid=ImgDetMain" />
            </div>
          </div>
          <div className="chat-header color-black">
            {message.sender_name}
          </div>
          <div className="chat-bubble">
            {t===0?message.message: message.traslated_content}
            <button className="px-2 py-1 rounded-full bg-green-500 hover:bg-green-700" onClick={changeText}>
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Message;
