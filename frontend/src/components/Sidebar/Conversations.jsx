import Conversation from "./Conversation";
// import Sidebar from "./Sidebar";

const Coversations = ({contactList})=>{
    // console.log("c list",contactList);
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
        </div>
    );
}
export default Coversations;