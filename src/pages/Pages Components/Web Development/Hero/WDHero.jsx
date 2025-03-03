import React from 'react'
import dark_arrow from '../../../../assets/dark-arrow.png'
import './WDHero.css'
import { Link,Element } from 'react-scroll'


const WDHero = () => {
  return (
   <div className='wd-hero'>
           <div className="wd-hero-text">
               <h1>Become a Professional Web Designer with Inarrch Technologies</h1>
               <p>"Your website is your digital storefront—are you ready to design stunning, user-friendly websites?"
               </p>
               
               <Link to='wd-about' smooth={true} offset={-260} duration={500} className='btn'>Explore more <img src={dark_arrow} alt="" /></Link>
           </div>
       </div>
  )
}

export default WDHero