import React from 'react'
import './GDAbout.css'
import gd_1 from '../../../../assets/gd-1.png'
import gd_2 from '../../../../assets/gd-2.png'
// import { Link } from 'react-router-dom'
import { Link,Element } from 'react-scroll'


const GDAbout = () => {
  return (
    <div className="gd-about-container">
    <div className='gd-about'>
        <div className="gd-about-left" >
            <img src={gd_2} alt="" className='about-img'/>
        </div>
        <div className="gd-about-right">
        {/* <h3>ABOUT US</h3> */}
        <h2>Introduction to Graphic Design</h2>
        <p><h3>"Every great brand starts with great design—are you ready to create impact?"</h3>
        </p>
        <p>
        Graphic design is more than just making things look good—it’s about visual storytelling. From logos and branding to social media graphics and advertisements, design shapes how the world sees a brand.
        </p>
        <p>
        At Inarrch Technologies, our job-oriented graphic design course will equip you with industry-relevant skills to help you master design software, understand color psychology, and create stunning visuals that leave a lasting impression.
        </p>
        <h3>Ready to turn ideas into reality?</h3>
        <p>📌<Link to='contact' smooth={true} offset={-260} duration={500}>Enroll Now</Link>
        </p>
        </div>
        <div className="about-strategy">
        </div>
    </div>
    <div className='gd-about-strategy'>
        <div className="gd-about-strategy-left">
    <h2>Graphic Design Strategy: The Blueprint for Creativity</h2>
    <p>Good design is intentional—learn how to create with purpose!
        </p>
        <p>
        A great design doesn’t happen by accident. It involves:
        </p>
        <p>
        <ul>
            <li><b>Understanding Brand Identity</b> – Designing for a purpose</li>
            <li><b>Mastering Design Tools</b> – Photoshop, Illustrator, Canva & more</li>
            <li><b>Learning Typography & Color Theory</b> – Crafting visually appealing layouts</li>
            <li><b>Creating Engaging Visuals</b> – Social media, ads, packaging & web design.</li>
            <li><b>Building a Strong Portfolio</b> – Showcase your skills to land jobs & clients</li>
        </ul>
        <h4>Our hands-on training at Inarrch Technologies ensures you gain practical experience and develop a unique design style that sets you apart in the industry.</h4>
        </p>
        <h3>Start Designing Like a Pro!</h3>
        <p>📌 <Link to='contact' smooth={true} offset={-260} duration={500}>Join Now</Link>
        </p>
        </div>
        <div className="gd-about-strategy-right">
        <img src={gd_1} alt="Strategy Image" />
        </div>
    </div>
    <div className='gd-about-importance'>
    <h2>Why is Graphic Design Important?</h2>
    <p>First impressions matter—great design makes brands unforgettable!
        </p>
        <p>
        Graphic design is the backbone of branding and marketing. It helps businesses:
        </p>
        <p>
        <ul>
            <li>Build a Strong Identity</li>
            <li>Increase Engagemen</li>
            <li>Boost Conversions</li>
            <li>Enhance Communication</li>
        </ul>        
        </p>
        <p>
        With businesses investing heavily in design, skilled graphic designers are highly in demand. Our industry-focused training prepares you for exciting career opportunities in top companies and freelance markets.
        </p>
        <h3>Ready to turn ideas into reality?</h3>
        <p>📌 <Link to='contact' smooth={true} offset={-260} duration={500}>Apply Today</Link>
        </p>
    </div>
    <div className='gd-about-used'>
        <h2>Where is Graphic Design Used?</h2>
        <p>
        From billboards to social media—design is everywhere!
        </p>
        <p>
        <ul>
            <li>Branding & Logo Design</li>
            <li>Marketing & Advertising</li>
            <li>Website & UI/UX Design </li>
            <li>Print Media</li>
        </ul>
        </p>
        <p>
            At Inarrch Technologies, we provide real-world projects & internship opportunities to help you build a strong portfolio and kickstart your career.
        </p>
        <h3>
        Your Design Journey Begins Here!
        </h3>
        <p>📌 <Link to='contact' smooth={true} offset={-260} duration={500}>Get Started Today</Link>
        </p>
    </div>
    <div className='gd-about-conclusion'>
        <h2>Conclusion: Design the Future—Your Future!</h2>
        <p>Every designer was once a beginner—start your journey today!</p>
        <p>
            Graphic design is a high-demand career with limitless growth opportunities. Whether you want to become a brand designer, UI/UX expert, ad creator, or freelancer, this course will give you the skills, tools, and confidence to succeed.
        </p>
        <p>
            Join Inarrch Technologies and learn hands-on graphic design from industry experts.
        </p>
        <p>📌<Link to='contact' smooth={true} offset={-260} duration={500}>Enroll Now & Transform Your Creativity into Success</Link></p>
    </div>
    </div>
    
  )
}

export default GDAbout