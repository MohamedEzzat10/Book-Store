import React from 'react'
import HeadingTitle from '../../components/headingTitle/HeadingTitle';
import Services from '../../components/services/Services';
import Slider from '../../components/slider/Slider';
import {books} from '../../data/books'
import BookSlider from '../../components/book-slider/BookSlider';
function Home() {
  return (
    <div className='home' >
    <Slider/>
    <Services/>
    <HeadingTitle title={"Most gifted"}/>
    <BookSlider data={books}/>
    <HeadingTitle title={"Best seller"}/>
    <BookSlider data={books}/>
     <HeadingTitle title={"Most wished for"}/>
    <BookSlider data={books}/>
    
    </div>
  )
}

export default Home