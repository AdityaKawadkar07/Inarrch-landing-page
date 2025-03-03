import React from 'react'
import dark_arrow from '../../../../assets/dark-arrow.png'
import './DMHero.css'
import { Link,Element } from 'react-scroll'


const DMHero = () => {
  return (
   <div className='dm-hero'>
           <div className="dm-hero-text">
               <h1>Master Digital Marketing with Inarrch Technologies</h1>
               <p>Turn Your Passion into a High-Income Skill!
               </p>
               
               <Link to='dm-about' smooth={true} offset={-260} duration={500} className='btn'>Explore more <img src={dark_arrow} alt="" /></Link>
           </div>
       </div>
  )
}

export default DMHero