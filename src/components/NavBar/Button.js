import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

function Button() {
  return (
    <div>
      <Link to='sign-up'>
        <button className='signup-button'>Sign up</button>
      </Link>
      <Link to='sign-in'>
        <button className='signin-button'>Sign in</button>
      </Link>
    </div>
  )
}

export default Button
