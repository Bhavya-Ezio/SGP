import Conversation from "./Conversation";
const Coversations =({contactList})=>{
    return(
        <div className="py-2 flex flex-col overflow-auto">
            <div className='divider px-3'></div>
			<div>
				{/* Render the contact list */}
				{contactList.map((contact) => (
					<div key={contact.associated_no}>{contact.username}</div>
				))}
			</div>

        </div>
    )
}
export default Coversations;