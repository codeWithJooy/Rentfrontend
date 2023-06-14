import React from "react";
import "./Tenant.css";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const AddTenant = () => {
  return (
    <div className="tenantMain">
      <Header />
      <div className="tenantSection">
        <div className="tenantAddSection">
          <p>Tenant Name</p>
          <input type="text" />
        </div>
        <div className="tenantAddSection">
          <p>Phone Number</p>
          <input type="text" />
        </div>
        <div className="tenantAddSection">
          <p>Tenant Room</p>
          <input type="text" />
        </div>
        <div className="tenantAddSection">
          <p>Date of Joining</p>
          <input type="date" />
        </div>
        <div className="tenantAddHalf">
          <div className="tenantAddLeftSection">
            <p>Room Rent</p>
            <input type="number" />
          </div>
          <div className="tenantAddRightSection">
            <p>Security Deposit</p>
            <input type="number" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddTenant;
