import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { useContext } from "react";
// import messages from "./messagedata";
import { MessagesContext } from "../../Pages/Home/MessageContext";

const MessageContainer=()=>{
	const { messages } = useContext(MessagesContext);
	console.log(messages);
    return (
        <div className='md:min-w-[450px] flex flex-col'>
			
 				{/* Header */}
 				<div className='bg-slate-500 px-4 py-2 mb-2'>
 					<span className='label-text'>To:</span> <span className='text-gray-900 font-bold'>Utsav Bhalani</span>
 				</div>
 				<Messages messages={Array(messages)}/>
 				<MessageInput />
 			
 		</div>
    )
}

export default MessageContainer;
