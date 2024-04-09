//messages.jsx
import Message from "./Message";
const Messages=(messages)=>{
    console.log("messages",messages);
    // let messsages =messages.messages[0][0]
    return (
        <div className="px-4 flex-1 overflow-auto">
            <Message messages={messsages}/>
        </div>
    )
}
export default Messages;