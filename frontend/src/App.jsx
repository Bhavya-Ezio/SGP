import { useState } from 'react'
import Login from "./Pages/login/Login";
import SingUp from './Pages/singup/SingUp';
import './App.css'
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {


  return (
    <div className='p-4 h-screen flex items-center justify-center' >
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SingUp />} />
          <Route path="/homepage" element={<Home className="h-full" />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
