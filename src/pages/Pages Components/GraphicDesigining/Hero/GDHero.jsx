import React from 'react'
import dark_arrow from '../../../../assets/dark-arrow.png'
import './GDHero.css'
import { Link,Element } from 'react-scroll'


const GDHero = () => {
  return (
   <div className='gd-hero'>
           <div className="gd-hero-text">
               <h1>Become a Professional Graphic Designer with Inarrch Technologies</h1>
               <p>Design isn’t just art—it’s communication. Ready to turn your creativity into a career?
               </p>
               
               <Link to='gd-about' smooth={true} offset={-260} duration={500} className='btn'>Explore more <img src={dark_arrow} alt="" /></Link>
           </div>
       </div>
  )
}

export default GDHero