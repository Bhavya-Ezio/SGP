//home.jsx
import Sidebar from "../../components/Sidebar/Sidebar";
import MessageContainer from "../../components/massages/MessageContainer";
import React, { useEffect, useState } from 'react';
import { MessagesProvider } from "../../hooks/MessageContext";

const Home = () => {
	const [contactList, setContactList] = useState([]);
	const storedUserData = localStorage.getItem('currentUser');
	const currentUser = storedUserData ? JSON.parse(storedUserData) : null;
	useEffect(() => {
		const fetchContactList = async () => {
			try {
				// console.log(currentUser);
				let obj = {
					user_no: currentUser.mob_number
				}
				const response = await fetch('http://localhost:3000/get-contact-list', {
					method: "POST",
					body: JSON.stringify(obj),
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
		<div className='w-full h-full flex backdrop-blur-lg'>
			<MessagesProvider>
				<div className="flex w-full h-full"> {/* Flex container */}
					<div className="w-4/12"> {/* Sidebar takes 35% of full width */}
						<Sidebar contactList={contactList} />
					</div>
					<div className="flex-1"> {/* MessageContainer takes remaining width */}
						<MessageContainer />
					</div>
				</div>
			</MessagesProvider>
		</div>

	);
};
export default Home;
