import React, { useState } from 'react'
import Nave from './Nave'
import './header.css'
import HeaderTop from './HeaderTop'
function Header() {
  const [Toggle,setToggle]=useState(false);
  return (
   <>
   <header className='header'>
<HeaderTop set={setToggle} toggle ={Toggle}/>
<Nave toggle ={Toggle}  set={setToggle} />

   </header>
   </>
  )
}

export default Header
