import React from 'react';
import './SignIn.css';
import InputField from './InputField';
import SignInLogo from './SignIn-Logo.svg';
import SignInFooter from './SignIn-Footer.svg'

function SignIn() {
  return (
    <div className='sign-in-page'>
      <img src={SignInLogo} alt='sign-in-logo' className='sign-in-logo' />
      
      <div className='login-form'>
        <div className='login-info'>
          <h3>Log in</h3>
          <p>Access your resource edge account</p>
        </div>

        <form method='get' className='user-info'>
          <h4>Email Address</h4>
          <InputField 
            type='text'
            placeholder='Enter Email'
            label='email-address'
          />
          <h4>Password</h4>
          <InputField 
            type='text'
            placeholder='Enter Email'
            label='email-address'
          />
          <button className='login-btn'>Next</button>
        </form>
        {/* <div className='email-info'>
          <span>Email Address</span>
          <input type='text' label placeholder='Enter Email' />
        </div>

        <button className='login-btn'>Next</button> */}

        <hr />
        <span className='forgot-password'>Forgot Password?</span>
      </div>

      <footer className='signIn-footer'>
        <img src={SignInFooter} alt='sign-in-footer' />
      </footer>

    </div>
  )
}

export default SignIn
