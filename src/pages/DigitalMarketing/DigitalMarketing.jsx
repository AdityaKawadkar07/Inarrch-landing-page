import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import DMHero from '../Pages Components/Digital Marketing/Hero/DMHero'
import DMAbout from '../Pages Components/Digital Marketing/About/DMAbout'
import Contact from '../../Components/Contact/Contact'
import Footer from '../../Components/Footer/Footer'

const DigitalMarketing = () => {
  return (
    <div>
        <Navbar/>
        <DMHero/>
        <DMAbout/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default DigitalMarketing