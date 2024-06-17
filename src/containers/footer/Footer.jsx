import React from 'react';
import './footer.css';
import gpt3Logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <div className='gpt5__footer section__padding'>
      <hr className='gradient__text'style={{width:"100%",height:"15px"}}/>
      <div className="gpt5__footer-heading">
        <h1 className="gradient__text">Do you want to step into the future befor others</h1>
      </div>
      <div className="gpt5__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="gpt5__footer-links">
        <div className="gpt5__footer-links_logo">
          <img src={gpt3Logo} alt="logo" />
          <p>All Rights Reserved</p>
        </div>
        <div className="gpt5__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>counters</p>
          <p>contacts</p>
        </div>
        <div className="gpt5__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>counters</p>
        </div>
        <div className="gpt5__footer-links_div">
          <h4>Get in touch</h4>
          <p>Bremang UGC B219, Kumasi,Ghana</p>
          <p>+233547495692</p>
          <p>info@akemmensah.net</p>
        </div>
      </div>
      <div className="gpt5__footer-copyright">
        <p>© 2024 GPT-5. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer;
