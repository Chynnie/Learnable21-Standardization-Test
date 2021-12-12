import React from 'react';
import './Dashboard.css';
import menuBar from '../../../src/svg/menu.svg';
import logo from '../../../src/svg/Logo.svg';
import separator from '../../../src/svg/Seperator.svg';
import avatar from '../../../src/svg/Avatar.svg';
import circle from '../../../src/svg/Circle - empty.svg';

function Dashboard() {
  return (
    <div>
      <nav className="nav-bar">
        <div className="nav-content">
          <img src={menuBar} alt="menu-bar" className="menubar" />
          <img src={logo} alt="logo" className="logo" />
          <img src={separator} alt="separator" className="separator" />
          <span className="tm">TM Dashboard</span>
          <img src={avatar} alt="avatar" className="avatar" />
        </div>
      </nav>
      <div className="dash-content">
        <section className="welcome">
          <img src={avatar} alt="avatar" className="welcome-avatar" />
          <h1>Hello, Chinenye Jiwuaku</h1>
          <p>Welcome and good to have you back.</p>
        </section>

        <section className="todo">
          <h3>Things to do</h3>
          <>
            <div className="todo-box1">
              <span className="emp-perf">
                Upload your employee performance agreement
              </span>
              <img src={circle} alt="circle" className="circle1" />
              <button className="begin">Begin</button>
            </div>
            <div className="todo-box2">
              <span className="quart-rev">Start quarterly self review</span>
              <img src={circle} alt="circle" className="circle2" />
              <button className="resume">Resume</button>
            </div>
          </>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;
