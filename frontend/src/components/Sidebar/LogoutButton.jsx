// import { BiLogOut } from "react-icons/bi";
// import useLogout from "../../hooks/useLogout";
import {useNavigate} from "react-router-dom";

const LogoutButton = () => {
	const navigate = useNavigate();
	// const { loading, logout } = useLogout();
	const logout=(event)=>{
		event.preventDefault();
		localStorage.removeItem('currentUser')
		navigate("/");
	}
	return (
		<div className='btn btn-block btn-sm mt-2' onClick={logout}>
			logout
		</div>
	);
};
export default LogoutButton;
