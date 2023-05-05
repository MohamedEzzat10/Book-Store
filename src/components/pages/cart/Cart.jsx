import React from 'react'
import {cartInfo }from '../../../data/cart'
import'./cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFromCart, mynasQuantity, plusQuantity } from '../../rtk/CartSlice'
function Cart() {
  const dispatch =useDispatch()
  const cartItems = useSelector((state)=>state.cart)

  const totalPrice = cartItems.reduce((acc,cur) => acc + cur.price * cur.quantity ,0)
  
  return (
    <div className='cart'>
    <div className="cart_title"><h2>Your Shopping Cart</h2> </div>
    <div className="cart_wrapper">
    <div className="cart_items">
    {cartItems.map(cart=>{
return(
<div key={cart.id} className="cart_item">
<div className="cart_item_image">
<img src={`./books/${cart.image}`} alt={cart.title} />
</div>
<div className="cart_info">
<div className="cart_info_dtls">
<div className="cart_item_title">
<b>Title: </b> {cart.title}
</div>
<div className="cart_author">
<b>Author:</b>  {cart.author}
</div>
<div className="cart-item-price">
<b>Price: </b> {(cart.price * cart.quantity).toFixed(2)} $
<i  className="bi bi-plus-lg"></i>
<i className="bi bi-dash-lg"></i>
</div> 
</div>
<div className="cart-item-quantity">
<div className="btn_control">
<button onClick={()=>dispatch(plusQuantity(cart))} >
+
</button>
<b>{cart.quantity}</b>
<button  onClick={()=>dispatch(mynasQuantity(cart))}>
-
</button>
</div>
<i onClick={()=>{dispatch(deleteFromCart(cart))}}
className="bi bi-trash-fill det"
></i>

</div>


</div>

</div>

    
)

    })}
    
    
    </div>
    <div className="order_summery">
        <div className="order_summery_title">ORDER SUMMERY</div> 
        <div className="order_summery_item">
        <span>Sub Total :</span>

        <span> $ {(totalPrice).toFixed(2)}</span>
        </div>
        <div className="order_summery_item">
        <span>Shopping Coast :</span>

        <span> 0</span>
        </div> 
        <div className="order_summery_item">
        <span>Discount :</span>

        <span> 0</span>
        </div>
        <div className="order_summery_item">
        <span> Total :</span>

        <span>$ {(totalPrice).toFixed(2)} </span>
        </div>
    </div>
    </div>   


    </div>
  )
}

export default Cart