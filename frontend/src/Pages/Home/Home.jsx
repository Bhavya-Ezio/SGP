
import Sidebar from "../../components/Sidebar/Sidebar";
import MessageContainer from "../../components/massages/MessageContainer";


const Home = () => {
	const clicked= async ()=>{
		// console.log("hello");
		let obj={
            senderid : 1,
            receiverid : 3
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
            console.log("res data",resData);
        } catch (error) {
            console.log(error);
        }
	}
	return (
		<div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
			<Sidebar />
			<MessageContainer/>
			<button onClick={clicked}>click me</button>
		</div>
	);
};
export default Home;
