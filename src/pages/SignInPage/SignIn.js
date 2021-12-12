import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './SignIn.css';
import InputField from './InputField';
import signInLogo from '../../svg/SignIn-Logo.svg';
import signInFooter from '../../svg/SignIn-Footer.svg';
import edit from '../../../src/svg/edit-filled.svg';

function SignIn() {
  const [formData, setFormData] = useState({
    name: 'Chinenye Jiwuaku',
    email: '',
    selected: false,
  });
  return (
    <div className="sign-in-page">
      <img src={signInLogo} alt="sign-in-logo" className="sign-in-logo" />

      <div className="login-form">
        <div className="login-info">
          <h3>Log in</h3>
          <p>Access your resource edge account</p>
        </div>
        {formData.email && formData.selected ? (
          <PasswordForm formData={formData} />
        ) : (
          <SignInForm formData={formData} setFormData={setFormData} />
        )}
      </div>

      <footer className="signIn-footer">
        <img src={signInFooter} alt="sign-in-footer" />
      </footer>
    </div>
  );
}

const SignInForm = ({ formData, setFormData }) => (
  <form className="user-info">
    <div className="email">
      <h4>Email Address</h4>
      <InputField
        type={'email'}
        placeholder={'Enter Email'}
        className={'e-field'}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
    </div>
    <button
      className="login-btn"
      onClick={() => setFormData({ ...formData, selected: true })}
    >
      Next
    </button>
    <hr />
    <span className="forgot-password">Forgot Password?</span>
  </form>
);

const PasswordForm = ({ formData }) => {
  const history = useHistory();
  return (
    <form className="user-info">
      <div className="email-data">
        <h5 className="name-data">{formData.name}</h5>
        <h6>{formData.email}</h6>
        <img src={edit} alt="edit" className="edit" />
      </div>
      <div className="password">
        <h4>Password</h4>
        <InputField
          type={'password'}
          placeholder={'Enter Password'}
          className={'pswd-field'}
        />
      </div>
      <button className="login-btn" onClick={() => history.push('/dashboard')}>
        Log In
      </button>
      <hr />
      <span className="forgot-password">Forgot Password?</span>
    </form>
  );
};

export default SignIn;
