import React from 'react';
import SignInLogo from './SignIn-Logo.svg';
import SignInFooter from './SignIn-Footer.svg';
import './Password.css';

function Password() {
  return (
    <div className='sign-in-page'>
      <img src={SignInLogo} alt='sign-in-logo' className='sign-in-logo' />
      
      <div className='login-form'>
        <div className='login-info'>
          <h3>Log In</h3>
          <p>Access your resource edge account</p>
          <span className='name'>Chinenye Jiwuaku</span>
          <span className='user-email'>chinenyejiwuaku@gmail.com</span>
        </div>

        <div className='password-info'>
          <span>Password</span>
          <input type='password' placeholder='Enter Password' />
        </div>

        <button className='login-btn'>Log In</button>

        <hr />
        <span className='forgot-password'>Forgot Password?</span>
      </div>

      <footer className='signIn-footer'>
        <img src={SignInFooter} alt='sign-in-footer' />
      </footer>

    </div>
  )
}

export default Password
