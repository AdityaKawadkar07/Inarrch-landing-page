import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
       <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{
              setPlayState(true)
            }}/>
        </div> 
       <div className="about-right">
        <h3>ABOUT US</h3>
        <h2>Inarcch Technologies Pvt Ltd</h2>
        <p>At Inarcch Technologies Pvt Ltd, we are committed to delivering innovative digital solutions that drive business growth. With expertise in digital marketing, website development, SEO, and advertising, we help brands establish a strong online presence, enhance engagement, and achieve measurable success in today’s competitive digital landscape.
        </p>
        <p>
        <ul>
<li>✅ Industry Expertise – Skilled marketers, developers, and SEO specialists.</li>
<li>✅ Results-Driven – Proven strategies backed by analytics.</li>
<li>✅ Custom Solutions – Scalable strategies for startups & enterprises.</li>
<li>✅ Trust & Transparency – Ethical practices and data security.</li>
    </ul>

        </p>
        <h2>Join Our Team</h2>
        <p>We believe in nurturing fresh talent and providing career-building opportunities through comprehensive training programs and internships in digital marketing, web development, and SEO. Our hands-on approach ensures that aspiring professionals gain practical industry experience, advanced skills, and expert mentorship to thrive in the ever-evolving digital space.
        </p>
        </div> 
    </div>
  )
}

export default About