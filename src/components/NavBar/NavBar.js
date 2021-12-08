import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import Dropdown from './Dropdown';
import './NavBar.css'
import Group from './Group.svg';
import Group1 from './Group1.svg';
import Menu from './menu-outline.svg';
import Cross from './cross.svg';

function NavBar() {
  const [click, setClick] = useState(true);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const mobileMenu = () => setClick(false);

  const mouseEnter = () => {
    if (window.innerWidth < 768) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const mouseLeave = () => {
    if (window.innerWidth < 768) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <div>

      <nav className='navbar'>
        {/* <div> */}
          <Link to='/'>
            <img 
              src={Group}
              className='logo'
              alt='logo'
            />
          </Link>

          {/* Mobile Logo */}
          <Link to='/'>
            <img 
              src={Group1} 
              className='mobile-logo'
              alt="logo" 
            />
          </Link>
        {/* </div> */}

        <div>
          <img 
            src={click ? Menu : Cross} 
            className='menu-outline'
            alt="menu" 
            onClick={handleClick}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
          />
          {dropdown && <Dropdown />}
        </div>

        {/* <div> */}
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={mobileMenu}>
              Features
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={mobileMenu}>
              About
            </Link>
          </li>
        </ul>
        {/* </div> */}
        <div>
          <Button />
          {/* <button className='signup-button'>Sign up</button>
          <button className='signin-button'>Sign in</button> */}
        </div>
        
        {/* Menu Bar */}
        {/* <img 
          src={click ? Menu : Cross} 
          className='menu-outline'
          alt="menu" 
          onClick={handleClick}
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
        />
        {dropdown && <Dropdown />} */}
        
      </nav>

      
      
    </div>
  )
}

export default NavBar
