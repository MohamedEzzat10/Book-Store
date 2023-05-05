import React, { useState } from 'react'
import './book-slider.css'
import Rating from '../rating/Rating';
import PopUp from '../Pop_up-Content/PopUp';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../rtk/CartSlice';
function BookSlider({data}) {
  const dispatch =useDispatch()
  const cart=useSelector((state)=>state.cart)
  console.log(cart);

  const [slider,setSlider]=useState(0);
  const [popUp,setPopUp]=useState(false)
  const[book,setBook]=useState(null)
 const  handelPop =(item)=>{
  setPopUp(true)
  setBook(item)
}
  const handelClick =(direction)=>{
if(direction === 'left'){
  setSlider(slider +1)
}
else if(direction === "right"){
  setSlider(slider -1)

}
  }
  
  return (
    <div  className='book-slider-container' >
    {slider !== 0 &&    <i onClick={()=>handelClick('right')} className="bi bi-chevron-left book-slider-arrow-left"></i>
  }
<div style={{ transform: `translateX(${slider * -360}px)` }}  className="book-slider-rapper">

{data.map(item =>{
  return(
<div key={item.id} className="book-slider-item">
<div className="book-slider-img">
<img src={`/books/${item.image}`} alt={item.title} />
</div>
<h3 className="book-slider-item-title">{item.title}</h3>
<Rating rating ={item.rating} reviews={item.reviews}/>
<div className="book-slider-item-price">{item.price} $</div>
<div className="book-slider-icons-wrapper">
  <i onClick={()=>handelPop(item)} className="bi bi-eye-fill"></i>
  <i onClick={()=>dispatch(add({...item ,'quantity':1}))} className="bi bi-cart-plus"></i>
</div>
</div>
  )
})

}
</div>
    {slider <= 4 &&    <i onClick={()=>handelClick('left') } className="bi bi-chevron-right book-slider-arrow-right"></i>
  }
  {popUp&&<PopUp close={setPopUp} bookdata={book}/>}
  </div>

  )
}

export default BookSlider