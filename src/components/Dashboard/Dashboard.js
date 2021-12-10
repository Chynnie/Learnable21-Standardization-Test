import React from 'react';
import MenuBar from './menu.svg';
import Logo from './Logo.svg';
import Separator from './Seperator.svg';
import Avatar from './Avatar.svg';
import Todo1 from './Todo1.svg';
import Todo2 from './Todo2.svg';
import Circle from './Circle - empty.svg';
import './Dashboard.css';
import InputField from '../SignInPage/InputField';

function Dashboard() {
  return (
    <div>
      <nav className='nav-bar'>
        <div className='nav-content'>
          <img src={MenuBar} alt='menu-bar' className='menubar' />
          <img src={Logo} alt='logo' className='logo' />
          <img src={Separator} alt='separator' className='separator'/>
          <span className='tm'>TM Dashboard</span>
          <img src={Avatar} alt='avatar' className='avatar' />
        </div>
      </nav>

      <section className='welcome'>
        <img src={Avatar} alt='avatar' className='welcome-avatar' />
        <h1>Hello, Chinenye Jiwuaku</h1>
        <p>Welcome and  good to have you back.</p>
      </section>

      {/* <section className='todo'>
        <h3>Things to do</h3>
        <img src={Todo1} alt='todo1' className='todo1' />
        <img src={Todo2} alt='todo2' className='todo2' />
      </section> */}

      <section className='todo'>
        <h3>Things to do</h3>
        <form>
          <div>
            <InputField 
            value='Upload your employee performance agreement' 
            className='todo-box1'
            />
            <img src={Circle} alt='circle' className='circle1' />
            <label className='begin'>Begin</label>
          </div>
          <div>
            <InputField 
            value='Start quarterly self review' 
            className='todo-box2'
            />
            <img src={Circle} alt='circle' className='circle2' />
            <button className='resume'>Resume</button>
          </div>
        </form>
        {/* <div className='todo-box'>
          <img src={Circle} alt='circle' />
          <span>Upload your employee performance agreement</span>
          <button>Begin</button>
        </div> */}
        
      </section>
    </div>
  )
}

export default Dashboard
