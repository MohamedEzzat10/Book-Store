import React from 'react'
import { Link } from 'react-router-dom'

export default function Nave({toggle,set}) {
  return (
    <>
    <div style={{left:toggle&& '0'}} className='navbar'>
    <ul>
    <Link to='/' onClick={()=>set(false)} > Home</Link>
    <Link to ='/authors' onClick={()=>set(false)} > Authors</Link>
    <Link to ='/about'  onClick={()=>set(false)}> About</Link>
    <Link to ='/contact'  onClick={()=>set(false)}> Contact Us</Link>
    <Link to ='/register'  onClick={()=>set(false)}> Register Us</Link>

    </ul>
    </div>
    
    </>
  )
}
