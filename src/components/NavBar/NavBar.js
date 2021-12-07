import React from 'react';
import Group from './Group.svg';
import Group1 from './Group1.svg';
import Menu from './menu-outline.svg'

function NavBar() {
  return (
    <div>

      <nav>
        <div>
          <img 
            src={Group}
            className='logo'
            alt='logo'
          />
          
          <img 
            src={Group1} 
            className='mobile-logo'
            alt="logo" 
          />
        </div>
        <div>
        <ul>
          <li>Features</li>
          <li>About</li>
          </ul>
        </div>
        <div>
          <img 
            src={Menu} 
            className='menu-outline'
            alt="menu" 
          />
          <button className='signup-button'>Sign up</button>
          <button className='signin-button'>Sign in</button>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
