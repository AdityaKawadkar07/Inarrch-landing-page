import React from 'react'
import './MBAAbout.css'
import about_img from '../../../../assets/about.png'
import mba_1 from '../../../../assets/mba-1.png'
import mba_2 from '../../../../assets/mba-2.png'
// import { Link } from 'react-router-dom'
import { Link,Element } from 'react-scroll'

const MBAAbout = () => {
  return (
    <div className="mba-about-container">
    <div className='mba-about'>
        <div className="mba-about-left" >
            <img src={mba_1} alt="" className='about-img'/>
        </div>
        <div className="mba-about-right">
        {/* <h3>ABOUT US</h3> */}
        <h2>Introduction to the MBA Internship Program</h2>
        <p><h3>"Classroom learning gives you knowledge—internships give you experience. Are you ready to bridge the gap?"</h3>
        </p>
        <p>
        An MBA isn’t just about textbooks and case studies—it’s about real-world business challenges. At Inarrch Technologies, our MBA internship program is designed to provide hands-on experience in marketing, finance, HR, and business strategy.      
        </p>
        <p>
        Gain exposure to real corporate projects, industry mentorship, and practical problem-solving that will make you job-ready from day one!</p>
        <h3>Transform Your MBA into a Powerful Career Asset!</h3>
        <p>📌<Link to='contact' smooth={true} offset={-260} duration={500}>Apply Now</Link>
        </p>
        </div>
        {/* <div className="about-strategy">
        </div> */}
    </div>
    <div className='mba-about-strategy'>
        <div className="mba-about-strategy-left">
    <h2>Why an MBA Internship is Crucial for Your Career</h2>
    <p>Companies don’t just hire MBAs—they hire professionals with real-world experience!
        </p>
        <p>
        A structured MBA internship helps you:
        </p>
        
        <ul>
            <li><b>Gain Practical Experience</b> – Work on real-time business challenges</li>
            <li><b>Develop Corporate Skills</b> – Leadership, strategy & decision-making</li>
            <li><b>Build a Strong Network</b> – Connect with industry experts</li>
            <li><b>Enhance Your Resume</b> – Stand out in job interviews</li>
            <li><b>Get Pre-Placement Opportunities</b> – Prove your skills to potential employers</li>
        </ul>
        <p>
        <h4>At Inarrch Technologies, we offer live projects, mentorship, and professional development training to ensure you graduate with confidence.</h4>
        </p>
        <h3>Your Corporate Journey Starts Here!</h3>
        <p>📌 <Link to='contact' smooth={true} offset={-260} duration={500}>Join Now</Link>
        </p>
        </div>
        <div className="mba-about-strategy-right">
        <img src={mba_2} alt="Strategy Image" />
        </div>
    </div>
    <div className='mba-about-importance'>
    <h2>What You Will Learn in This Internship</h2>
    <p>MBA students with hands-on experience have a 60% higher chance of securing top jobs—are you one of them?
        </p>
        <p>
        Our internship covers key business domains:
        </p>
        <p>
        <ul>
            <li>Marketing & Digital Strategy – Learn branding, SEO, social media, and analytics</li>
            <li>Finance & Business Analytics – Work on financial modeling, budgeting & forecasting</li>
            <li>Human Resource Management – Gain experience in recruitment, training & policies</li>
            <li>Operations & Business Strategy – Understand process optimization & market analysis</li>
        </ul>        
        </p>
        <p>
        With real-world projects, case studies, and mentorship, our program prepares you to excel in the corporate world.        </p>
        <h3>Get Real-World Business Experience!</h3>
        <p>📌 <Link to='contact' smooth={true} offset={-260} duration={500}>Apply Today</Link>
        </p>
    </div>
    <div className='mba-about-used'>
        <h2>Where Can This Internship Take You?</h2>
        <p>
        From MNCs to startups—every business values experience over theory!
        </p>
        <p>Our MBA internship opens doors to:</p>
        <p>
        <ul>
            <li>Top Corporate Jobs – Secure high-paying roles in global companies</li>
            <li>Startup & Entrepreneurship – Build your own business with real insights</li>
            <li>Consulting & Strategy Roles – Work with business leaders & decision-makers</li>
            <li>Freelancing & Project-Based Work – Get flexible career opportunities</li>
        </ul>
        </p>
        <p>
        At Inarrch Technologies, we ensure that your internship experience aligns with your career goals through personalized mentoring and career guidance.        </p>
        <h3>
        Step Into the Corporate World with Confidence!        
        </h3>
        <p>📌 <Link to='contact' smooth={true} offset={-260} duration={500}>Apply Now</Link>
        </p>
    </div>
    <div className='mba-about-conclusion'>
        <h2>Conclusion: Your MBA is Just the Beginning—Make It Count!!</h2>
        <p>The right internship can turn your MBA into a high-growth career—don’t miss the opportunity!
        </p>
        <p>
        This isn’t just an internship; it’s your gateway to real-world success. Whether you’re aiming for a top corporate role, a startup journey, or consulting opportunities, our program gives you the skills, network, and experience to make it happen.        </p>
        <p>
        Join Inarrch Technologies and gain practical MBA training that sets you apart in the job market.        
        </p>
        <p>📌<Link to='contact' smooth={true} offset={-260} duration={500}>Apply Now & Start Your MBA Internship Journey</Link></p>
    </div>
    </div>
    
  )
}

export default MBAAbout