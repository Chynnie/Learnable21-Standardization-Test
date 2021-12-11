import React from 'react';
import HrIcon1 from './HR-Icon1.svg';
import HrIcon2 from './HR-Icon2.svg';
import HrIcon3 from './HR-Icon3.svg';

function HrCard() {
  return (
    <div className='hr-card'>
      <section className='card'>
        <img src={HrIcon1} alt='hr-icon' className='hr-icon' />
        <h3>Employee Management</h3>
        <p>From Hiring & Onboarding to Retiring, the <br/> Resource Edge Employee Management <br/>module  eliminates all the complexities & <br/>paperwork involved in managing your team.</p>
      </section>

      <section className='card'>
        <img src={HrIcon2} alt='hr-icon' className='hr-icon' />
        <h3>Performance Management</h3>
        <p>Manage and track employee performance with <br/>our easy-to-use tools for goal setting, <br/>performance agreements and performance <br/>reviews.</p>
      </section>

      <section className='card'>
        <img src={HrIcon3} alt='hr-icon' className='hr-icon' />
        <h3>Paid time off</h3>
        <p>Employees can request for paid time off, <br/>vacations, sick leaves or educational leaves <br/>and get approvals all within Resource Edge. <br/>HR managers can equally ensure compliance.</p>
      </section>
    </div>
  )
}

export default HrCard
