import React from 'react'
import './WDAbout.css'
import about_img from '../../../../assets/about.png'
import wd_1 from '../../../../assets/wd-1.png'
import wd_2 from '../../../../assets/wd-2.png'
// import { Link } from 'react-router-dom'
import { Link,Element } from 'react-scroll'


const WDAbout = () => {
  return (
    <div className="wd-about-container">
    <div className='wd-about'>
        <div className="wd-about-left" >
            <img src={wd_1} alt="" className='about-img'/>
        </div>
        <div className="wd-about-right">
        {/* <h3>ABOUT US</h3> */}
        <h2>Introduction to Web Designing</h2>
        <p>"75% of users judge a company’s credibility based on its website—will your designs impress?"
        </p>
        <p>
        Web design is the art and science of creating visually appealing, functional, and user-friendly websites. A well-designed website enhances user experience, boosts engagement, and drives conversions.        </p>
        <p>
        At Inarrch Technologies, our job-oriented web designing course equips you with industry-standard tools, coding knowledge, and design principles to help you build stunning, responsive, and interactive websites.        </p>
        <h3>Turn Your Creativity into a High-Paying Skill!</h3>
        <p>📌 <Link to='contact' smooth={true} offset={-260} duration={500}>Enroll Now</Link>
        </p>
        </div>
        <div className="about-strategy">
        </div>
    </div>
    <div className='wd-about-strategy'>
        <div className="wd-about-strategy-left">
    <h2>Web Design Strategy: The Secret to a Great Website</h2>
    <p>"Good design isn’t just about looks—it’s about usability, speed, and experience!"
        </p>
        <p>
        A successful website follows a structured approach:
        </p>
        <p>
        <ul>
            <li><b>✅ Understanding UI/UX Design</b> – Create user-friendly interfaces</li>
            <li><b>✅ Mastering HTML, CSS & JavaScript</b> – Build the foundation of web pages</li>
            <li><b>✅ Responsive Web Design</b> – Ensure mobile-friendliness</li>
            <li><b>✅ Designing with SEO in Mind</b> – Rank higher on Google</li>
            <li><b>✅ Optimizing Performance & Speed</b> – Fast-loading websites for better user experience</li>
        </ul>
        <h4>At Inarrch Technologies, we teach hands-on techniques, real-world projects, and industry trends to make you a professional web designer.</h4>
        </p>
        <h3>Start Designing Websites That Convert!</h3>
        <p>📌 <Link to='contact' smooth={true} offset={-260} duration={500}>Join Now</Link>
        </p>
        </div>
        <div className="wd-about-strategy-right">
        <img src={wd_2} alt="Strategy Image" />
        </div>
    </div>
    <div className='wd-about-importance'>
    <h2>Why is Web Designing Important?</h2>
    <p>"A well-designed website isn’t a luxury—it’s a necessity for business success!"
        </p>
        <p>
        Web design plays a crucial role in:
        </p>
        <p>
        <ul>
            <li>✅ First Impressions – A professional website builds trust</li>
            <li>✅ User Experience (UX) – Easy navigation keeps users engaged</li>
            <li>✅ SEO & Visibility – Search engine-friendly design improves ranking</li>
            <li>✅ Business Growth – High-converting websites drive revenue</li>
        </ul>        
        </p>
        <p>
        With businesses investing heavily in online presence, skilled web designers are highly sought-after. Our industry-relevant training prepares you for top career opportunities in web development and design.        </p>
        <h3>Become an In-Demand Web Designer!</h3>
        <p>📌 <Link to='contact' smooth={true} offset={-260} duration={500}>Register Now</Link>
        </p>
    </div>
    <div className='wd-about-used'>
        <h2>Where is Web Designing Used?</h2>
        <p>
        "Every business, brand, and professional needs a website—are you ready to create them?"
        </p>
        <p>Web designing is essential for:</p>
        <p>
        <ul>
            <li>✅ Corporate & Business Websites – Build an online presence</li>
            <li>✅ E-commerce Platforms – Design engaging online stores</li>
            <li>✅ Portfolio & Personal Branding Sites – Showcase work and attract clients</li>
            <li>✅ Landing Pages & Marketing Funnels – Generate leads & conversions</li>
            <li>✅ Freelancing & Remote Jobs – Earn from anywhere in the world</li>
        </ul>
        </p>
        <p>
        At Inarrch Technologies, we offer real-world projects & internships to help you build a strong portfolio and kickstart a successful career in web design.        </p>
        <h3>
        Your Web Design Journey Starts Here!
        </h3>
        <p>📌 <Link to='contact' smooth={true} offset={-260} duration={500}>Get Started Today</Link>
        </p>
    </div>
    <div className='wd-about-conclusion'>
        <h2>Conclusion: Design the Web—Design Your Future!</h2>
        <p>"Every great website starts with a great designer—will that be you?"</p>
        <p>
        Web designing is a highly rewarding career with unlimited growth opportunities. Whether you want to work for top companies, start your own business, or freelance, this course gives you the skills, tools, and confidence to succeed.        </p>
        <p>
        Join Inarrch Technologies and master practical web designing with expert guidance.
        </p>
        <p>📌<Link to='contact' smooth={true} offset={-260} duration={500}>Don’t Just Browse—Start Building! Enroll now</Link></p>
    </div>
    </div>
    
  )
}

export default WDAbout