import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { SiIndeed } from 'react-icons/si';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <p>© 2025. All rights reserved</p>
      <ul className='footer-links'>
        <li><a href='#'>Terms of Services</a></li>
        <li><a href='#'>Privacy Policy</a></li>
      </ul>
      <div className='social-icons'>
        <a href='https://www.facebook.com/inarrchtechnologiesnag/' target='_blank' rel='noopener noreferrer'>
          <FaFacebookF />
        </a>
        <a href='https://www.instagram.com/inarrchtechnologies?igsh=ajQzMGoxMTBqYTVv' target='_blank' rel='noopener noreferrer'>
          <FaInstagram />
        </a>
        <a href='https://www.linkedin.com/company/inarrch-technologies-private-limited/' target='_blank' rel='noopener noreferrer'>
          <FaLinkedinIn />
        </a>
        <a href='https://in.indeed.com/cmp/Inarrch-Technologies' target='_blank' rel='noopener noreferrer'>
          <SiIndeed />
        </a>
      </div>
    </div>
  );
}

export default Footer;
