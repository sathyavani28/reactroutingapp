import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Registration from './Registration'
import Login from './Login'
import Contact from './Contact'

import './style.css'
import Demo1 from '../apidemo/Demo1'
import Demo2 from '../apidemo/Demo2'

export default function NavBar() {
  return (
    <div>

      <nav>

       <Link to="/">Home</Link>
       <Link to="about">About</Link>
       <Link to="reg">Registration</Link>
       <Link to="login">Login</Link>
       <Link to="contact">Contact</Link>

      </nav>
    
      <Routes>

       <Route path="/" element={<Home/>}/>
       <Route path="/about" element={<About/>}/>
       <Route path="/reg" element={<Registration/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="contact" element={<Contact/>}/>


       <Route path='/demo1' element={<Demo1/>}/>
       <Route path='/demo2' element={<Demo2/>}/>

      </Routes>



    </div>
  )
}
