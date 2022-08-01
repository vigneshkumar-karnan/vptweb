import React from 'react'
import './Home.css'
import Header from '../Header/Header'
import Hero from '../Hero/Hero'
import bg_0 from '../../assets/image0.jpg'
import bg_1 from '../../assets/image1.jpg'
import bg_2 from '../../assets/image2.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

const images = [
  {background : bg_0},
  {background : bg_1},
  {background : bg_2}
]

const Home = () => {
  return (
  <section id='homesection'>
    <Swiper 
        spaceBetween={5}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="home_Container">
        
          {
            images.map(({background}, index)=>{
              return(
                <SwiperSlide key={index} className="project">
                  <img src={background} alt="viprant" className='bg' />
                  <div className='layer'></div>
                </SwiperSlide>
              )
            })
          }
          <Header></Header>
          <Hero className='h_Div'></Hero>
      </Swiper> 
  </section>    
  )
}

export default Home