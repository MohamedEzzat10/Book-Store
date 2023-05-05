import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function HeaderTop({set,toggle}) {
  const itemOfCart = useSelector(state=>state.cart)
  return (
   <>
   <div className='header-top'>              
   <div onClick={()=>set(prev => !prev)} className='header-menu'>
    {toggle?<i className="bi bi-x"></i>:<i  className="bi bi-list"></i>}


   </div>
   <div className='header-contact'>
   <i className="bi bi-telephone-fill"></i>
   <span>139-142-215-5</span>
   </div>
   <div className='header-title'>
   Welcome to Online Book Store
   </div>
   <Link to='/login' className='header-log'>
   <i class="bi bi-person-fill"></i>
   <span>Login</span>
   </Link>

   </div>
   <div className='header-middle'>
   <Link to='/'  className='logo-middle'>
   <b>Book</b>
   <i className='bi bi-book'></i>
   <b>Store</b>
   </Link>
   <div className='search-middle'>
    <input className='search-input' placeholder='search in book store ...' type='search'/>
    <i className='bi bi-search'></i>
   </div>
   <Link to='/cart' className='cart-middle'>
   <span className="book_number_ofCart">{itemOfCart.length}</span>
   <i className='bi bi-cart2'></i>
   </Link>

   
   </div>
   </>
  )
}

export default HeaderTop
