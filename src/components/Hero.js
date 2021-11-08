import React from 'react'
import "./Hero.css"

const Hero = () => {
  return (
    <div className="hero-bg">
      <div className="hero">
        <div className="hero-content">
          <h1>Bara &Jeff</h1>
          <p>Would like to invite you for their wedding celebration</p>
          <p className="bold">Tuesday 24th of May 2022</p>
          <ul className="address">
            <li>Na Dobre vode 39</li>
            <li>Prague-Kreslice</li>
            <li>Czech Republic</li>
          </ul>
          <p className="font">reception to follow</p>
        </div>
      </div>   
    </div>
  )
}

export default Hero
