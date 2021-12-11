import React from 'react';
import './LandingPage.css';
import NavBar from '../../components/NavBar/NavBar';
import HrCard from './HR/HrCard';
import AdminLog from './AdminLog/AdminLog';
import Finance from './Finance/Finance';
import relax from '../../svg/3_Relax V1.svg';
import employee from '../../svg/Employee-Directory.svg';
import adminReport from '../../svg/Direct Reports - List.svg';
import financeList from '../../svg/Finance-List.svg';
import partnership from '../../svg/Partnership.svg';
import Footer from '../../svg/Footer.svg';

function LandingPage() {
  return (
    <div className="content">
      <NavBar />
      <main>
        <section className="section1">
          <div className="message">
            <h1>
              Throw paperwork <br />
              into the trash where <br />
              it belongs.
            </h1>
            <p>
              Eliminate all the hassle involved in managing <br />
              people operations by automating it.
            </p>
          </div>
          <img src={relax} alt="relax" className="relax-v1" />
        </section>

        <section className="hr-section">
          <div className="hr-message">
            <h1>Human Resources</h1>
            <p>
              Onboard new employees, manage the employee lifecycle <br />
              and measure employee performance.
            </p>
          </div>
          <HrCard />
          <img src={employee} alt="employee-directory" className="employee" />
        </section>

        <section className="admin-section">
          <div className="admin-log">
            <h1>Admin & Logistics</h1>
            <p>
              Manage and track company assets as well as logistics for <br />
              travelling employees
            </p>
          </div>
          <AdminLog />
          <img src={adminReport} alt="admin-report" className="admin-report" />
        </section>

        <section className="finance-section">
          <div className="finance">
            <h1>Finance</h1>
            <p>
              Generate invoices, track expenditure, and manage complex payrolls
              for <br />
              multiple teams and companies
            </p>
          </div>
          <Finance />
          <img src={financeList} alt="finance-list" className="finance-list" />
        </section>

        <img src={partnership} alt="partnership" className="partnership" />
      </main>

      <footer className="footer">
        <img src={Footer} alt="footer" className="footer-logo" />
      </footer>
    </div>
  );
}

export default LandingPage;
