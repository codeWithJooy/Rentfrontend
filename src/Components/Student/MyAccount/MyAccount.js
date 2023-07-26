import React from "react";

const MyAccount = () => {
  return (
    <div className="stuMainUnit">
      <div className="stuMainHeader">
        <p>My Accounts</p>
      </div>
      <div className="stuMainSection">
        <AccountCard />
      </div>
    </div>
  );
};

export default MyAccount;

const AccountCard = () => {
  return (
    <div className="stuAmountCard">
      <div className="stuAmountTitle">
        <p>Security Deposit</p>
      </div>
      <div className="stuAmountDetails">
        <div className="stuAmountType">
          <p>&#8377; 32000</p>
        </div>
        <div className="stuAmountImg">
          <img src={"Assets/Students/userHeader.png"} />
        </div>
      </div>
      <div className="stuAmountPay">
        <p>Pay Now</p>
      </div>
    </div>
  );
};
