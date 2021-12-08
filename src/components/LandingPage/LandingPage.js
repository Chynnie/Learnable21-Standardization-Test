import React from 'react';
import './LandingPage.css'
import Relax from './3_Relax V1.svg';

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
      </main>
    </div>
  )
}

export default LandingPage
