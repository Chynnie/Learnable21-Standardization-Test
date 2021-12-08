import React, { useState } from 'react';
import Group from './Group.svg'
import Group1 from './Group1.svg';
import Menu from './menu-outline.svg';
import Cross from './cross.svg';
import './NavBar.css'

const NavBar = () => {

  const [mobile, setMobile] = useState(false);
  return (
    <nav className='navbar'>
      
      <img
        src={Group}
        alt='logo'
        className='desktop-logo'
      />

      <img 
        src={Group1}
        alt='logo'
        className='mobile-logo'
      />

      <div className='nav-mobile'>
        <ul 
          className={mobile ? 'nav-links-mobile' : 'nav-links'}
          onClick={() => setMobile(false)}  
        >
          <li>Features</li>
          <li>About</li>
        </ul>

        <button className={mobile ? 'sign-up-mobile' : 'sign-up'}>Sign Up</button>
        <button className={mobile ? 'sign-in-mobile' : 'sign-in'}>Sign In</button>
      </div>

      <img
        src={ mobile ? ([Cross]) : ([Menu]) }
        alt='menu'
        className='mobile-menu'
        onClick={() => setMobile(!mobile)} 
      />
    </nav>
  )
}

export default NavBar
