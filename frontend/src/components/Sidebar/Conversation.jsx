import { useContext } from "react";
import { MessagesContext } from "../../hooks/MessageContext";

const Conversation = (conversation) => {
    // console.log("convo ",conversation);
    const { setSelectedConversation } = useContext(MessagesContext);
    const { setCurrentConversation, currentConversation } = useContext(MessagesContext);
    // const { currentUser } = useContext(CurrentUserContext)
    const getMessage = async () => {
        const storedUserData = localStorage.getItem('currentUser');
        const currentUser = storedUserData ? JSON.parse(storedUserData) : null;
        // console.log(currentUser);
        try {
            let obj = {
                sender_no: currentUser.mob_number,
                receiver_no: conversation.conversation.associated_no
            }
            const response = await fetch('/get-chat', {
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
            // console.log("data ",data);
            setSelectedConversation(data)
            setCurrentConversation(conversation.conversation)
            // console.log(currentConversation);
        } catch (error) {
            console.error('Error fetching contact list:', error);
            // Handle error (e.g., display an error message)
        }
    }
    // console.log("conversation: ",conversation.conversation.username);
    return (
        <>
            <div onClick={getMessage} className='flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'>
                <div className='avatar online'>
                    <div className='w-12 rounded-full'>
                        <img
                            src='https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png'
                            alt='user avatar'
                        />
                    </div>
                </div>

                <div className='flex flex-col flex-1'>
                    <div className='flex gap-3 justify-between'>
                        <p className='font-bold text-gray-200'>{conversation.conversation.username}</p>
                        <span className='text-xl'>🎃</span>
                    </div>
                </div>
            </div>
            <div className='divider my-0 py-0 h-1' />
        </>

    );
};
export default Conversation;