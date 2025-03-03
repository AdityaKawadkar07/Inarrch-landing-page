import React from 'react'
import dark_arrow from '../../../../assets/dark-arrow.png'
import './MBAHero.css'
import { Link,Element } from 'react-scroll'


const MBAHero = () => {
  return (
   <div className='mba-hero'>
           <div className="mba-hero-text">
               <h1>Kickstart Your Corporate Journey with Inarrch Technologies' MBA Internship</h1>
               <p>"An MBA degree is valuable, but real-world experience makes you unstoppable!"
               </p>
               
               <Link to='mba-about' smooth={true} offset={-260} duration={500} className='btn'>Explore more <img src={dark_arrow} alt="" /></Link>
           </div>
       </div>
  )
}

export default MBAHero