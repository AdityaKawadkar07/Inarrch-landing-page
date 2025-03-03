import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Contact from '../../Components/Contact/Contact'
import WDHero from '../Pages Components/Web Development/Hero/WDHero'
import WDAbout from '../Pages Components/Web Development/About/WDAbout'


const WebDevelopment = () => {
  return (
    <div>
      <Navbar/>
      <WDHero/>
      <WDAbout/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default WebDevelopment