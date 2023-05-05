import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './login.css'
export default function Login() {
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const [showPassword,setShowPassword]=useState(false)

   const handelShowPassword =(event)=>{
    if(event === "show"){
      setShowPassword(true)
    }else{
      setShowPassword(false)
    }

   }

    const handelSubmit = (e)=>{
        e.preventDefault()
        if(email.trim()==="") return toast.error("Email is required");
        if(password.trim()==="") return toast.error("Password is required");

       console.log(password,email);
    }
  return (
    <div className='login_wrapper'>
    
    <ToastContainer/>
    <h1 className='form_title' >Login To Your Account </h1>
  <form onSubmit={handelSubmit }>
  <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Inter YourEmail...' />
  <input  value={password} onChange={(e)=>setPassword(e.target.value)} type={
    showPassword ?"text" :"password"
  }placeholder='Password' />
  {showPassword ?<i className="bi bi-eye-slash-fill  hide_password" onClick={()=>handelShowPassword("hide")}></i>:
  <i  className="bi bi-eye-fill show_password" onClick={()=>handelShowPassword("show")}></i>

  }
  <button className='btn_login'>Login</button>
  </form>
  <div className="form_footer">
  Don't have an account ? {" "}
  <Link to='/register' className='register'>Register</Link> 
  </div>
    </div>
  )
}
