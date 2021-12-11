import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './NavBar.css';
import group from '../../svg/Group.svg';
import group1 from '../../svg/Group1.svg';
import menu from '../../svg/menu-outline.svg';
import cross from '../../svg/cross.svg';

const NavBar = () => {
  const history = useHistory();
  const [mobile, setMobile] = useState(false);

  return (
    <nav className="navbar">
      <img src={group} alt="logo" className="desktop-logo" />

      <img src={group1} alt="logo" className="mobile-logo" />

      <div className="nav-mobile">
        <ul
          className={mobile ? 'nav-links-mobile' : 'nav-links'}
          onClick={() => setMobile(false)}
        >
          <li>Features</li>
          <li>About</li>
        </ul>

        <button className={mobile ? 'sign-up-mobile' : 'sign-up'}>
          Sign Up
        </button>
        <button
          className={mobile ? 'sign-in-mobile' : 'sign-in'}
          onClick={() => history.push('/sign_in')}
        >
          Sign In
        </button>
      </div>

      <img
        src={mobile ? [cross] : [menu]}
        alt="menu"
        className="mobile-menu"
        onClick={() => setMobile(!mobile)}
      />
    </nav>
  );
};

export default NavBar;
