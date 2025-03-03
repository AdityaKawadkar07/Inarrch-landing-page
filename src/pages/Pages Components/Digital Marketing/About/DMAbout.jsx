import React from 'react'
import './DMAbout.css'
import about_img from '../../../../assets/about.png'
import dm_1 from '../../../../assets/dm-1.png'
import dm_2 from '../../../../assets/dm-2.png'
// import { Link } from 'react-router-dom'
import { Link,Element } from 'react-scroll'

const DMAbout = () => {
  return (
    <div className="dm-about-container">
    <div className='dm-about'>
        <div className="dm-about-left" >
            <img src={dm_1} alt="" className='about-img'/>
        </div>
        <div className="dm-about-right">
        {/* <h3>ABOUT US</h3> */}
        <h2>Introduction to Digital Marketing</h2>
        <p>"Did you know? 80% of businesses rely on digital marketing to grow—are you ready to be in demand?"
        </p>
        <p>
        In today’s digital age, businesses thrive on online visibility. Digital marketing is the art and science of promoting brands using digital channels like social media, search engines, email, and websites. It enables businesses to connect with their audience, drive sales, and build lasting relationships.        </p>
        <p>
        At Inarrch Technologies, we offer a job-oriented digital marketing course designed to equip you with real-world skills and hands-on experience.        </p>
        <h3>Ready to become a digital marketing expert?</h3>
        <p>📌 <Link to='contact' smooth={true} offset={-260} duration={500}>Enroll Now</Link>
        </p>
        </div>
        <div className="about-strategy">
        </div>
    </div>
    <div className='dm-about-strategy'>
        <div className="dm-about-strategy-left">
    <h2>Digital Marketing Strategy: The Key to Online Success</h2>
    <p>"Marketing without a strategy is like driving without a map—where are you headed?"
        </p>
        <p>
        A winning digital marketing strategy combines:
        </p>
        <p>
        <ul>
            <li>✅ <b>SEO </b>– Rank higher on Google</li>
            <li>✅ <b>Social Media Marketing</b> – Engage with your audience</li>
            <li>✅ <b>Content Marketing</b> – Tell your brand’s story</li>
            <li>✅ <b>PPC Advertising</b> – Social media, ads, packaging & web design.</li>
            <li>✅ <b>Email Marketing</b> – Convert leads into customers</li>
        </ul>
        <h4>Our course at Inarrch Technologies dives deep into each of these areas, providing real-world case studies and practical training to help you build a result-driven strategy.</h4>
        </p>
        <h3>Start Building Your Strategy Today!</h3>
        <p>📌 <Link to='contact' smooth={true} offset={-260} duration={500}>Join Now</Link>
        </p>
        </div>
        <div className="dm-about-strategy-right">
        <img src={dm_2} alt="Strategy Image" />
        </div>
    </div>
    <div className='dm-about-importance'>
    <h2>Why is Digital Marketing Important?</h2>
    <p>"94% of consumers research online before making a purchase—are businesses finding you?"
        </p>
        <p>
        In a world where people spend hours on their screens, digital marketing is not an option; it’s a necessity. It helps businesses:
        </p>
        <p>
        <ul>
            <li>✅ Increase Brand Awareness</li>
            <li>✅ Generate Quality Leads</li>
            <li>✅ Improve Customer Engagement</li>
            <li>✅ Boost Sales & Revenue</li>
        </ul>        
        </p>
        <p>
        At Inarrch Technologies, we teach you the latest industry trends and tools to help you become a highly sought-after digital marketing professional.
        </p>
        <h3>Don’t Just Scroll—Start Earning!</h3>
        <p>📌 <Link to='contact' smooth={true} offset={-260} duration={500}>Register Now</Link>
        </p>
    </div>
    <div className='dm-about-used'>
        <h2>Where is Digital Marketing Used?</h2>
        <p>
        "From small businesses to Fortune 500 companies—everyone needs digital marketing!"
        </p>
        <p>Digital marketing is everywhere:</p>
        <p>
        <ul>
            <li>✅ E-commerce – Drive traffic & sales</li>
            <li>✅ Startups & SMEs – Build a strong online presence</li>
            <li>✅ Corporate Businesses – Expand market reach</li>
            <li>✅ Freelancing & Remote Jobs – Earn from anywhere</li>
            <li>✅ Personal Branding – Establish your authority</li>
        </ul>
        </p>
        <p>
        With our hands-on training and internship opportunities, Inarrch Technologies prepares you for exciting career opportunities in every industry.        </p>
        <h3>
        Take the First Step Towards a Successful Career!
        </h3>
        <p>📌 <Link to='contact' smooth={true} offset={-260} duration={500}>Get Started Today</Link>
        </p>
    </div>
    <div className='dm-about-conclusion'>
        <h2>Conclusion: The Future is Digital—Are You Ready?</h2>
        <p>"The best time to start learning digital marketing was yesterday. The second best time is NOW!"</p>
        <p>
        Digital marketing is a game-changer, and skilled professionals are in high demand. Whether you’re a student, entrepreneur, job seeker, or freelancer, this course will open doors to endless career opportunities.        </p>
        <p>
        Join Inarrch Technologies and master practical digital marketing skills that will make you stand out in the industry.        </p>
        <h3>Don’t Wait—Your Digital Marketing Journey Begins Here!</h3>
        <p>📌<Link to='contact' smooth={true} offset={-260} duration={500}>Enroll Now & Kickstart Your Career</Link></p>
    </div>
    </div>
    
  )
}

export default DMAbout