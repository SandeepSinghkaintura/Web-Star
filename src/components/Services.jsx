import React from 'react'
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import  img1  from "../assets/3.jpg";
import  img2  from "../assets/4.jpg";

const Services =() => {
  return (
    <div className='services'>
<Carousel>

    <div className='div'>
    <img src={img1} alt="" />
  <p>Full Stack Development</p>
    </div>
    <div className='div'>
    <img src={img2} alt="" />
  <p>Web Development</p>
    </div>

</Carousel>
    </div>
  )
}

export default Services;