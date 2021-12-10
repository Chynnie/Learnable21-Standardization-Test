// import logo from './logo.svg';
import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import NavBar from './components/NavBar/NavBar';
import Password from './components/SignInPage/Password';
import SignIn from './components/SignInPage/SignIn';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div>
      {/* <NavBar /> */}
      {/* <LandingPage /> */}
      {/* <SignIn /> */}
      {/* <Password /> */}
      <Dashboard />
    </div>
  );
}

export default App;
