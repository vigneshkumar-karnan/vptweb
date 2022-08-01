import React from 'react'
import './Hero.css'
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section id='hero'>
      <p>We Are 
      <Typewriter
  
      onInit={(typewriter)=> {
        typewriter
          .typeString("Viprants")
          .pauseFor(1000)
          .deleteAll()
          .typeString("Smart Thinkers")
          .pauseFor(1000)
          .deleteAll()
          .typeString("Pragmatic")
          .pauseFor(1000)
          .deleteAll()
          .typeString("Dedicated")
          .start();
  }}
  /> !</p>

  <p>We know exactly what your Website needs. We bring ideas to life. Let the professionals take the stress out of managing your website</p>
    </section>
  )
}

export default Hero