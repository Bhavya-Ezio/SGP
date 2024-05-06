import {useNavigate} from "react-router-dom";
import { socket } from "../../socketIO/socket";
const LogoutButton = () => {
	const navigate = useNavigate();
	const storedUserData = localStorage.getItem("currentUser");
	const currentUser = storedUserData ? JSON.parse(storedUserData) : null;
	const logout=(event)=>{
		event.preventDefault();
		socket.emit('user-logout',currentUser.id)
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
