import React, { useState } from 'react';
import './SignIn.css';
import InputField from './InputField';
import SignInLogo from './SignIn-Logo.svg';
import SignInFooter from './SignIn-Footer.svg'

function SignIn() {

  // const [email, setEmail] = useState('');

  return (
    <div className='sign-in-page'>
      <img src={SignInLogo} alt='sign-in-logo' className='sign-in-logo' />
      
      <div className='login-form'>
        <div className='login-info'>
          <h3>Log in</h3>
          <p>Access your resource edge account</p>
          {/* <p>{ email }</p> */}
        </div>

        <form method='get' className='user-info'>
          <div className='email'>
            <h4>Email Address</h4>
            <InputField 
              type={'text'}
              placeholder={'Enter Email'}
              // value={ email }
              // onChange={(e) => setEmail(e.target.value)}
              className={'e-field'}
          />
          </div>
          <div className='password'>
            <h4>Password</h4>
            <InputField 
              type={'text'}
              placeholder={'Enter Password'}
              className={'pswd-field'}
            />
          </div>
          <button className='login-btn'>Next</button>
          <hr />
          <span className='forgot-password'>Forgot Password?</span>
        </form>
        
        
      </div>

      <footer className='signIn-footer'>
        <img src={SignInFooter} alt='sign-in-footer' />
      </footer>

    </div>
  )
}

export default SignIn
