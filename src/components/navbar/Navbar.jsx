import React from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import { useState } from 'react';

const Menu = ()=>(
      <>
        <p>
              <a href="#home">Home</a>
            </p>
            <p>
              <a href="#whatgpt3">What is GPT3?</a>
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
  const [toggleMenu,setToggleMenu] = useState(false)
  return (
    <div className='gpt5__navbar'>
      <div className='gpt5__navbar-links'>
        <div className='gpt5__navbar-links_logo'>
          <img src={logo} alt="logo" />
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
