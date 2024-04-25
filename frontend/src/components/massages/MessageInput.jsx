import { useContext } from "react";
import { MessagesContext } from "../../hooks/MessageContext";


const MessageInput = () => {
    const { currentConversation } = useContext(MessagesContext)
    const clicked = async (event)=>{
        // console.log("hello");
        event.preventDefault();
        let contents = document.getElementById("content").value
            let obj={
                sender_no : "7984986729",
                receiver_no : currentConversation.associated_no,
                content : contents
            }
            console.log(obj);
            try {
                const response=await fetch("http://localhost:3000/add-message",{
                    method: "POST",
                    body : JSON.stringify(obj),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const resData = await response.json();
                console.log("res data",resData);
            } catch (error) {
                console.log(error);
            }
        }
        return (
		<form className="px-4 my-3">
			<div className="w-full relative">
				
            <input 
            type="text" 
            id="content" 
            placeholder={`Send message to ${currentConversation.username ? currentConversation.username : ""}`} 
            className=" input input-bordered rounded-full"/>

            <button onClick={clicked} type="submit"className="btn btn-circle bg-sky-500 text-white">
                Send
            </button>
			</div>
        </form>
	);
};
export default MessageInput;
