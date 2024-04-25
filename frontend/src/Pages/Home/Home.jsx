//home.jsx
import Sidebar from "../../components/Sidebar/Sidebar";
import MessageContainer from "../../components/massages/MessageContainer";
import React, { useEffect,useState } from 'react';
import { MessagesProvider } from "../../hooks/MessageContext";
import {CurrentUserProvider} from "../../hooks/userContext";

const Home = () => {
	const [contactList, setContactList] = useState([]);
	useEffect(() => {
		const fetchContactList = async () => {
		  try {
			let obj={
				user_no : '9574827992'
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
			setContactList(data);
		  } catch (error) {
			console.error('Error fetching contact list:', error);
			// Handle error (e.g., display an error message)
		  }
		};
	
		fetchContactList(); // Call the fetchContactList function
	  }, []);
	return (
		<div className='h-window flex backdrop-blur-lg '>
				<CurrentUserProvider>
				<MessagesProvider>
					<Sidebar contactList={contactList} />
					<MessageContainer/>
				</MessagesProvider>
				</CurrentUserProvider>
		</div>
	);
};
export default Home;
