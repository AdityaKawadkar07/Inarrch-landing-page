import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { Link, Element } from 'react-scroll';
import menu_icon from '../../assets/menu-icon.png';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMobileMenu((prev) => !prev);
  };

  const handleHomeClick = () => {
    if (location.pathname === "/") {
      // If already on the homepage, scroll smoothly
      document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
    } else {
      // If on another page, navigate to homepage
      navigate("/");
    }
  };

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <div className='logo'>
        <img src={logo} alt="logo" />
        Inarrch Technologies
      </div>
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li>
          <span onClick={handleHomeClick} className="nav-link">
            Home
          </span>
        </li>
        <li 
          className="dropdown"
          onMouseEnter={() => setDropdown(true)}
          onMouseLeave={() => setDropdown(false)}
        >
          <Link to='programs' smooth={true} offset={-260} duration={500}>Programs</Link>
          {dropdown && (
            <ul className="dropdown-menu">
              <li onClick={() => navigate('/graphic-design')}>Graphics Designing</li>
              <li onClick={() => navigate('/digital-marketing')}>Digital Marketing</li>
              <li onClick={() => navigate('/web-development')}>Web Development</li>
              <li onClick={() => navigate('/mba-internship')}>MBA Internship</li>
            </ul>
          )}
        </li>        
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></li>
        <li><Link to='usp' smooth={true} offset={-260} duration={500}>Why Choose Us</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500} className='enquire'>Contact Us</Link></li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  );
};

export default Navbar;
