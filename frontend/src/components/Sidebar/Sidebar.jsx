//sidebar.jsx
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = ({ contactList }) => {
	// console.log("sidebar messages: ",contactList);
	return (

		<div className='border-r border-slate-500 p-4 '>
			<Conversations contactList={contactList} />
			<div className="absolute bottom-0 w-100%">
				<SearchInput />
				<LogoutButton />
			</div>
		</div>

	);
};
export default Sidebar;
