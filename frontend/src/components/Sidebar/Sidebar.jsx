//sidebar.jsx
import Conversations from "./Conversations";
// import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = ({contactList}) => {
	// console.log("sidebar messages: ",contactList);
	return (
		
		<div className='border-r border-slate-500 p-4 flex flex-col'>
			<SearchInput />
			<Conversations contactList={contactList}/>
			{/* <LogoutButton /> */}
			{/* <Home/> */}
		</div>
		
	);
};
export default Sidebar;
