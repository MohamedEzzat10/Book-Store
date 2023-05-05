import React, { useState } from 'react'
import img1 from'../../images/book1.png'
import img2 from'../../images/book2.png'
import img3 from'../../images/book3.png'
import './slider.css'

function Slider() {
  const[slideIndex,setSlidIndex]=useState(1);
 const handelClick = (direction)=>{
if(direction ==="left"){
  setSlidIndex(slideIndex - 1 )
} 
else if(direction === "right"){
  setSlidIndex(slideIndex + 1) 

 }}
  return (
    <div className='slider-container'>
{slideIndex !== 0   &&  <i onClick={()=> handelClick("left") } class="bi bi-chevron-double-left arrow-left"></i>}

    <div style={{transform: `translateX(${slideIndex * - 100}vw) `}} className="slider-wrapper">
    <div className="slider-content first-slide">
    <div className="slider-img">
    <img src={img1} alt="img1" />
    </div>
    <div className="slider-info">
    <h1 className="slider-title">Book Store</h1>
    <p className="slider-desc">
    It's not just reading ,it's living the adventure.
    </p>
    </div>
    </div>
    <div className="slider-content seconde-slide">
    <div className="slider-img">
    <img src={img2} alt="img1" />
    </div>
    <div className="slider-info">
    <h1 className="slider-title">Book Store</h1>
    <p className="slider-desc">
    It's not just reading ,it's living the adventure.
    </p>
    </div>
    </div>
    <div className="slider-content third-slide">
    <div className="slider-img">
    <img src={img3} alt="img1" />
    </div>
    <div className="slider-info">
    <h1 className="slider-title">Book Store</h1>
    <p className="slider-desc">
    It's not just reading ,it's living the adventure.
    </p>
    </div>
    </div>
    </div>
{slideIndex <2     &&  <i onClick={()=> handelClick("right") } class="bi bi-chevron-double-right arrow-right"></i>}

  
    </div>
  )
 }
 

export default Slider
