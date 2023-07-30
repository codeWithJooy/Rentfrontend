import React, { useState, useEffect } from "react";
import StudentHeader from "../../Components/Header/StudentHeader/StudentHeader";
import StudentFooter from "../../Components/Footer/StudentFooter/StudentFooter";
import MyAccount from "../../Components/Student/MyAccount/MyAccount";
import "./Student.css";
import StudentMenu from "../../Components/Student/StudentMenu/StudentMenu";
import HostelLife from "../../Components/Student/HostelLife/HostelLife";
import HostFriend from "../../Components/Student/StudentExtra/HostFriend";
import Eviction from "../../Components/Student/StudentExtra/Eviction";
import Payment from "../../Components/Student/StudentExtra/Payment";
const Student = () => {
  const [host, setHost] = useState(false);
  const [eviction, setEviction] = useState(false);
  const [paymentModel, setPaymentModel] = useState(false);
  const [paymentPageUpdate, setPaymentPageUpdate] = useState(true);
  return (
    <div className="studentMain">
      <StudentHeader />
      <div className="stuContainer">
        <MyAccount
          setPaymentModel={setPaymentModel}
          forceUpdate={paymentPageUpdate}
          setForceUpdate={setPaymentPageUpdate}
        />
        <HostelLife />
        <StudentMenu />
      </div>
      {host && <HostFriend setHost={setHost} />}
      {eviction && <Eviction setEviction={setEviction} />}
      {paymentModel && (
        <Payment
          setPaymentModel={setPaymentModel}
          setPaymentPageUpdate={setPaymentPageUpdate}
        />
      )}
      <StudentFooter />
    </div>
  );
};

export default Student;
