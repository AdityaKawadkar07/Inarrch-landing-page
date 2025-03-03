import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Contact from '../../Components/Contact/Contact'
import MBAHero from '../Pages Components/MBA Internship/Hero/MBAHero'
import MBAAbout from '../Pages Components/MBA Internship/About/MBAAbout'


const MbaInternship = () => {
  return (
    <div>
      <Navbar/>
      <MBAHero/>
      <MBAAbout/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default MbaInternship