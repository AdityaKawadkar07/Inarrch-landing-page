import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import GDHero from '../Pages Components/GraphicDesigining/Hero/GDHero'
import GDAbout from '../Pages Components/GraphicDesigining/About/GDAbout'
import Footer from '../../Components/Footer/Footer'
import Contact from '../../Components/Contact/Contact'


const GraphicDesign = () => {
  return (
    <div>
      <Navbar/>
      <GDHero/>
      <GDAbout/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default GraphicDesign