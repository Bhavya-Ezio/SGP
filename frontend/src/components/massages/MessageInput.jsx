


const MessageInput = () => {
    //function for clicking on a contact
    // const clicked1 = async (event)=>{
    //     // console.log("hello");
    //     event.preventDefault();
    //         let obj={
    //             sender_no : "7984986729",
    //             receiver_no : "9574827992"
    //         }
    //         try {
    //             const response=await fetch("http://localhost:3000/get-chat",{
    //                 method: "POST",
    //                 body : JSON.stringify(obj),
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                 },
    //             })
                
    //             if (!response.ok) {
    //                 throw new Error('Network response was not ok');
    //             }
    //             const resData = await response.json();
    //             console.log("res data",resData.rows);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    const clicked = async (event)=>{
        // console.log("hello");
        event.preventDefault();
        let contents = document.getElementById("content").value
            let obj={
                sender_no : "7984986729",
                receiver_no : "9574827992",
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
		<form className="flex items-center gap-2">
			<div className="w-full">
				
            <input type="text" id="content" placeholder="Search... " className=" input input-bordered rounded-full"/>

            <button onClick={clicked} type="submit"className="btn btn-circle bg-sky-500 text-white">
                Send
            </button>
			</div>
        </form>
	);
};
export default MessageInput;
