import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../login/login.css'
export default function Register() {
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const [userName,setUserName]=useState()


 

    const handelSubmit = (e)=>{
        e.preventDefault()
        if(email.trim()==="") return toast.error("Email is required");
        if(userName.trim()==="") return toast.error("UserName is required");

        if(password.trim()==="") return toast.error("Password is required");

    }
  return (
    <div className='login_wrapper'>
    
    <ToastContainer/>
    <h1 className='form_title' >Create New Account </h1>
  <form onSubmit={handelSubmit }>
  <input value={userName} onChange={(e)=>setUserName(e.target.value)} type="text" placeholder='Inter YourEmail...' />

  <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Inter YourEmail...' />
  <input  value={password} onChange={(e)=>setPassword(e.target.value)} type="text"
  placeholder='Password' />
 
  <button className='btn_login'>Register</button>
  </form>
  <div className="form_footer">
  Already have an account ? {" "}
  <Link to='/login' className='register'>Login</Link> 
  </div>
    </div>
  )
}