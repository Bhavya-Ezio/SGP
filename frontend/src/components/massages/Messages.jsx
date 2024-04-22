//messages.jsx
import Message from "./Message";
const Messages=(messages)=>{
    const messageArray = messages ? Object.values(messages) : [];
    // console.log("messages:",typeof(messageArray),messageArray);
    return (
        <div className="px-4 flex-1 overflow-auto">
            <Message messages={messageArray[0]}/>
        </div>
    )
}
export default Messages;