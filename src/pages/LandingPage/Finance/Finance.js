import React from 'react';
import reVouchers from '../../../../src/svg/Re-Vouchers.svg';
import payroll from '../../../../src/svg/Payroll.svg';

function Finance() {
  return (
    <div className="finance-sub">
      <section className="vouchers">
        <img src={reVouchers} alt="re-vouchers" className="re-voucher" />
        <h3>RE Vouchers</h3>
        <p>
          Track and manage expenditure <br />
          for multiple teams across your <br />
          organisation using Resource <br />
          Edge Vouchers
        </p>
      </section>

      <section className="payroll">
        <img src={payroll} alt="payroll" className="pay-roll" />
        <h3>Payroll</h3>
        <p>
          Our easy to use systems takes <br />
          away the pain of managing <br />
          complex payrolls for <br />
          organisations of all sizes.
        </p>
      </section>
    </div>
  );
}

export default Finance;
