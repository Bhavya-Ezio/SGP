import React from 'react'
import { Link } from 'react-router-dom';

const SingUp = () => {
    const click=async(event)=>{
        event.preventDefault();
        let username=document.getElementById('username').value;
        let password=document.getElementById('password').value;
        let number=document.getElementById('number').value;
        let obj={
            username : username,
            password : password,
            number : number
        }
        // console.log(obj);
        try {
            const response = await fetch('http://localhost:3000/add-data', {
                body: JSON.stringify(obj),
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
        
            const resData = await response.json();
            console.log(resData);
        } catch (error) {
            console.error('Error during fetch:', error.message);
        }
        
    }
    return (
    <div  className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-nd bg-grey-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <h1 className='text-3xl font-semibold text center text-grey-300'>
                Sign Up 
            </h1>

            <form>
                <div >
                <label className="label">
                        <span className='text-base label-text'>Number</span>
                    </label>
                    <input type='text'placeholder='Enter Number' className='w-full input input-bordered h-10' id='number'></input>
                </div>

                <div >
                <label className="label">
                        <span className='text-base label-text'>Username</span>
                    </label>
                    <input type='text'placeholder='Enter Username' className='w-full input input-bordered h-10' id='username'></input>
                </div>

                <div >
                    <label className="label">
                        <span className='text-base label-text'>Password</span>
                    </label>
                    <input
                        type='password'
                        placeholder='Enter Password'
                        className='w-full input input-bordered h-10'
                        id='password'
                    />
                    
                </div>
                <Link className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block ' to="/"> Already have a account?</Link>
                
                <div>
                    <button className='btn btn-block btn-sm mt-2 border-slate-700' onClick={click}>Sign up</button>
                </div>
            </form>
        </div>
      
    </div>
  )
}

export default SingUp;
