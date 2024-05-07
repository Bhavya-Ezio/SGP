import {socket} from "../../socketIO/socket"
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const loginClick=async(event)=>{
        event.preventDefault();
        let number=document.getElementById('number').value;
        let password=document.getElementById('password').value;
        if(number === '' || password === ''){
            alert("The fields cannot be empty")
        }
        else{
            let obj={
                number : number,
                password : password
            }
            try {
                const response=await fetch("/check-data",{
                    method: "POST",
                    body : JSON.stringify(obj),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const resData = await response.json();
                if(resData==="User not found")
                {
                    throw(Error("User not found"));
                }
                else{
                    // console.log(resData);
                    socket.emit('register', resData.id);
                    localStorage.setItem('currentUser', JSON.stringify(resData));
                    navigate('/homepage')
                }
            } catch (error) {
                console.log(error);
            }
        }
    }
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl font-semibold text-center text-gray-300'>
					<span className='text-blue-500'> Login</span>
				</h1>

				<form >
                    <div>
                        <label className='label p-2'>
                        <span className='text-base label-text'>Number</span>
                        </label>
                        <input type="text" placeholder='Enter Number' className='w-full input input-bordered h-10' id='number'/>
                    </div>

                    <label className="label">
                        <span className='text-base label-text'> Password</span>
                    </label>
                    <input
                    type='password'
                    placeholder='Enter Password'
                    className='w-full input input-bordered h-10'
                    id='password'
                    />
                     
                    <Link className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block' to="/signup">
                        Don't have an account?
                    </Link>

                    <div>
                        <button className='btn btn-block btn-sm mt-2' onClick={loginClick}>  
                            Login
                        </button>
                    </div>
                </form>

			</div>
		</div>
  )
}

export default Login;