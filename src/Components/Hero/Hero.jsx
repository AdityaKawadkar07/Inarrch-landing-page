import React from 'react'
import './Hero.css'
// import dark_arrow from 
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-text">
            <h1>Start with Us, Grow with Us</h1>
            <p>Shape Your Digital Future with Hands-On Training & Internship!<br/>
            Web Development, SEO, Design & More – Learn from the Best!
            </p>
            
            <button className="btn">Explore more <img src={dark_arrow} alt="" /> </button>
        </div>
    </div>
  )
}

export default Hero