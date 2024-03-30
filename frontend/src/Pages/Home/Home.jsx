
import Sidebar from "../../components/Sidebar/Sidebar";
import MessageContainer from "../../components/massages/MessageContainer";
import React, { useEffect } from 'react';


const Home = () => {
	useEffect(() => {
		const fetchContactList = async () => {
		  try {
			let obj={
				user_no : 1234567890
			}
			const response = await fetch('http://localhost:3000/get-contact-list', {
				method: "POST",
                body : JSON.stringify(obj),
                headers: {
                    'Content-Type': 'application/json',
                },
			});
			
			if (!response.ok) {
			  throw new Error('Failed to fetch contact list');
			}

			const data = await response.json();
			// console.log(data);
		  } catch (error) {
			console.error('Error fetching contact list:', error);
			// Handle error (e.g., display an error message)
		  }
		};
	
		fetchContactList(); // Call the fetchContactList function
	  }, []);
	return (
		<div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
			<Sidebar />
			<MessageContainer/>
		</div>
	);
};
export default Home;
