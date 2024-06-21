import React from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
// import logo from '../../assets/logo.svg';
import { useState, useEffect } from 'react';

const Menu = ()=>(
      <>
        <p>
              <a href="#home">Home</a>
            </p>
            <p>
              <a href="#whatgpt5">What is GPT5?</a>
            </p>
            <p>
              <a href="#possibility">Open AI</a>
            </p>
            <p>
              <a href="#features">Case Stusdies</a>
            </p>
            <p>
              <a href="#blog">Library</a>
            </p>
          </>
)
const Navbar = () => {
  const [toggleMenu,setToggleMenu] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`gpt5__navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className='gpt5__navbar-links'>
        <div className='gpt5__navbar-links_logo'>
          {/* <img src={logo} alt="logo" /> */}
          <h1>GPT-5</h1>
        </div>
        <div className='gpt5__navbar-links_container'>
            <Menu />
        </div>
      </div>
      <div className='gpt5__navbar-sign'>
          <p>Sign In</p>
          <button type='button'>Sign Up</button>
      </div>
      <div className='gpt5__navbar-menu'>
          {toggleMenu
          ?<RiCloseLine color='#fff' size={27} onClick={()=>{setToggleMenu(false)}} />
          :<RiMenu3Line color='#fff' size={27} onClick={()=>{setToggleMenu(true)}}/>
          }
          {toggleMenu && (
            <div className='gpt5__navbar-menu_container' scale-up-center>
              <div className='gpt5__navbar-menu_container-links'>
                <Menu />
                <div className='gpt5__navbar-menu_container-links-sign'>
                  <p>Sign In</p>
                  <button type='button'>Sign Up</button>
                </div>
              </div>
            </div>
          )}
      </div>
    </div>
  )
}

export default Navbar;
