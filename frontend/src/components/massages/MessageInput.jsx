


const MessageInput = () => {
    const clicked = async (event)=>{
        // console.log("hello");
        event.preventDefault();
            let obj={
                sender_no : "7984986729",
                receiver_no : "9574827992"
            }
            try {
                const response=await fetch("http://localhost:3000/get-chat",{
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
                console.log("res data",resData.rows);
            } catch (error) {
                console.log(error);
            }
        }
        return (
		<form className="flex items-center gap-2">
			<div className="w-full">
				
            <input type="text" placeholder="Search... " className=" input input-bordered rounded-full"/>

            <button onClick={clicked} type="submit"className="btn btn-circle bg-sky-500 text-white">
                Send
            </button>
			</div>
        </form>
	);
};
export default MessageInput;
