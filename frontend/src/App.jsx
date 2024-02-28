import { useState } from 'react'
import Login from "./Pages/login/Login";
import SingUp from './Pages/singup/SingUp';
import './App.css'
import Home from './Pages/Home/Home';

function App() {
 

  return (
    <div className='p-4 h-screen flex items-center justify-center' >
      {/* <SingUp /> */}
      {/* <Home/> */}
      <Login/>
    </div>
  )
}

export default App
