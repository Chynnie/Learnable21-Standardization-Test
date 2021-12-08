import React from 'react';
import './LandingPage.css'
import Relax from './3_Relax V1.svg';
import HrCard from './HR/HrCard';
import Employee from './HR/Employee-Directory.svg';
import AdminLog from './AdminLog/AdminLog';

function LandingPage() {
  return (
    <div className='content'>

      <main>
        <section className='section1'>
          <div className='message'>
            <h1>Throw paperwork <br/>into the trash where <br/>it belongs.</h1>
            <p>Eliminate all the hassle involved in managing <br/>people operations by automating it.</p>
          </div>
          <img src={Relax} alt="relax" className='relax-v1' />
        </section>

        <section className='hr-section'>
          <div className='hr-message'>
            <h1>Human Resources</h1>
            <p>
            Onboard new employees, manage the employee lifecycle <br/>and measure employee performance.
            </p>
          </div>
          <HrCard />
          <img src={Employee} alt="employee-directory" 
          className='employee' />
        </section>

        <section className='admin-log'>
          <div>
            <h1>Admin & Logistics</h1>
            <p>Manage and track company assets as well as logistics for <br/>travelling employees</p>
            <AdminLog />
          </div>
        </section>
      </main>
    </div>
  )
}

export default LandingPage
