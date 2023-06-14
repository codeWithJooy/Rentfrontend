import React, { useState } from "react";
import "./Tenant.css";
import moment from "moment/moment";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const AddTenant = () => {
  const [currentDate, setCurrentDate] = useState(moment().format("YYYY-MM-DD"));
  const onChangeDate = (e) => {
    const d = new Date(e.target.value);
    console.log(d.getMonth() + 1);
    console.log(d.getDate());
    const newDate = moment(new Date(e.target.value)).format("YYYY-MM-DD");
    setCurrentDate(newDate);
    console.log(newDate); //value picked from date picker
  };
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
          <input type="date" value={currentDate} onChange={onChangeDate} />
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
        <div className="tenantBalanceHeader">
          <p>Opening Balance of Tenant</p>
        </div>
        <div className="tenantBalanceSection">
          <div className="section">
            <div className="sectionUnitHeader">Dues Type</div>
            <div className="sectionUnitHeader">Due</div>
            <div className="sectionUnitHeader">Collected</div>
          </div>
          <div className="section">
            <div className="sectionUnit unitMain">Rent</div>
            <div className="sectionUnit">
              <p className="rate">Rs 400</p>
              <p className="range">14 June to 30 June</p>
            </div>
            <div className="sectionUnit collected">
              <img src="Assets/Tenant/edit.png" />
              <p>0</p>
            </div>
          </div>
          <div className="section">
            <div className="sectionUnit unitMain">Security Deposit</div>
            <div className="sectionUnit">
              <p className="rate">Rs 400</p>
              <p className="range">14 June to 30 June</p>
            </div>
            <div className="sectionUnit collected">
              <img src="Assets/Tenant/edit.png" />
              <p>0</p>
            </div>
          </div>
          <div className="tenantButton">
            <button>Add Tenant</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddTenant;
