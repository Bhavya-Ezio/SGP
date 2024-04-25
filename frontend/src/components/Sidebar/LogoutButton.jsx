// import { BiLogOut } from "react-icons/bi";
// import useLogout from "../../hooks/useLogout";
import {useNavigate} from "react-router-dom";

const LogoutButton = () => {
	const navigate = useNavigate();
	// const { loading, logout } = useLogout();
	const logout=(event)=>{
		event.preventDefault();
		navigate("/");
	}
	return (
		<div className='btn btn-block btn-sm mt-2' onClick={logout}>
			logout
			{/* {!loading ? (
				<BiLogOut className='w-6 h-6 text-white cursor-pointer' onClick={logout} />
			) : (
				<span className='loading loading-spinner'></span>
			)} */}
		</div>
	);
};
export default LogoutButton;
