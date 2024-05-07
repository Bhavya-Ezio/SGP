//messages.jsx
import { useRef,useEffect } from "react";
import Message from "./Message";
const Messages=(messages)=>{
    const lastMessageRef = useRef();

	useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [messages]);
    const messageArray = messages ? Object.values(messages) : [];
    // console.log(messageArray)
    return (
        <div className="px-4 flex-1 overflow-y-auto overflow-x-hidden flex-grow">
            <Message messages={messageArray[0]}/>
        </div>
    )
}
export default Messages;