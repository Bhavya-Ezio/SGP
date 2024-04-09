import Conversation from "./Conversation";
import Sidebar from "./Sidebar";

const Coversations = ({contactList})=>{
    
	return (
        <div className='py-2 flex flex-col overflow-auto'>
            {contactList.map((contact, idx) => (
                <Conversation
                    key={contact.associated_no}
                    conversation={contact} // Pass conversation object as prop
                    emoji={"🎃"}
                    lastIdx={idx === contact.length - 1}
                />
            ))}
            {/* <Sidebar messages={messages} /> */}
        </div>
    );
}
export default Coversations;