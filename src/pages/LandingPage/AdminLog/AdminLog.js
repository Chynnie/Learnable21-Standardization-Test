import React from 'react';
import travelLog from '../../../../src/svg/T-Log.svg';
import asset from '../../../../src/svg/Asset-Mgt.svg';

function AdminLog() {
  return (
    <div className="admin-sub">
      <section className="travel-log">
        <img src={travelLog} alt="travel-log" className="t-log" />
        <h3>Travel & Logistics</h3>
        <p>
          Make travel requests, get <br />
          approvals, and have access to <br />
          travel information.
        </p>
      </section>

      <section className="asset">
        <img src={asset} alt="asset-mgt" className="asset-mgt" />
        <h3>Asset Management</h3>
        <p>
          Manage the acquisition, <br />
          assignment, and disposition of <br />
          assets seamlessly.
        </p>
      </section>
    </div>
  );
}

export default AdminLog;
