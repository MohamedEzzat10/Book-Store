import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import'./PopUp.css'
import Rating from '../rating/Rating';
import { useDispatch } from 'react-redux';
import { add } from '../rtk/CartSlice';
export default function PopUp({bookdata,close}) {
  const {id,title,price,image,inStock,reviews,rating,author}= bookdata;
  const [quantity,setQuantity]=useState()
  const handelClick = (event)=>{
    setQuantity(event.target.value)
    }
    const dispatch = useDispatch()

  return (
    <div onClick={()=>close(false)} className='pop_up_content'>
<div onClick={(even)=>even.stopPropagation()} className="pop_up_content_item">
<div onClick={()=>close(false)} className="icone-close">X</div>
<div className="item_image">
<img src={`/books/${image}`} alt={title} />
</div>
<div className="item_info">
<h5 className="item_title">{title}</h5>
<div className="item_info_stock">
<b>Status: </b>{inStock?"In Stock":"Not In Stock"}
</div>
<div className="item_author">
<b>Author : </b>{author}
</div>
<Rating  rating ={rating} reviews={reviews}/>
<div className="item_price">
 <b>Price :</b> $ {price}
</div>
<input onChange={handelClick}
 type="number" 
  min ='1' 
  max='100' 
  value={+ quantity}
  className='item_input_number'
  placeholder='Amount'/>
<button 
onClick={()=> {dispatch( add({...bookdata,'quantity':+quantity}))}}
 className='item_add_to_cart'>
<i  className="bi bi-cart-plus"></i>
Add To Cart
</button>
<Link to={`/book/${id}`} className="more">
Show More Details
</Link>
</div>
</div>
    </div>
  )
}
