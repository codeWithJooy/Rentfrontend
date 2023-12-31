import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import moment from "moment";
import "./HostFriend.css";
import { addPendingCollection } from "../../../actions/Student/studentAction";

const Payment = ({ setPaymentModel, setPaymentPageUpdate }) => {
  const history = useHistory();
  const { userId, propertyId, tenantId, dueType, due, collections } = useSelector(
    (state) => state.student.studentPayment
  );
  const [payment, setPayment] = useState({
    userId,
    propertyId,
    tenantId,
    dueType,
    due,
    amount: collections,
    date: moment(new Date()).format("YYYY-MM-DD"),
    mode: "cash",
  });

  const handleCollection = (ev) => {
    let value = ev.target.value;
    if (value < 0) {
      value = 0;
    } else if (value > payment.due) {
      value = payment.due;
    }
    setPayment({ ...payment, amount: value });
  };

  const handlePayment = () => {
    (async () => {
      if (addPendingCollection(payment)) {
        setPaymentModel(false);
        setPaymentPageUpdate(true);
      }
    })();

  };
  return (
    <div className="extraUnitBg">
      <div className="extraUnitMainSection">
        <div className="extraUnitTop">
          <img
            src="Assets/Students/close.png"
            onClick={() => setPaymentModel(false)}
          />
          <div className="extraUnitHeader">
            <p>{payment.type}</p>
          </div>
          <div className="extraUnitSub">
            <p>Specify a Time and Invite your friend over.</p>
          </div>
        </div>

        <div className="extraUnitData">
          <div className="extraUnitInput">
            <label>Total Due</label>
            <input type="text" value={payment.due} readOnly />
          </div>
        </div>
        <div className="extraUnitData">
          <div className="extraUnitInput">
            <label>I am Payig</label>
            <input
              type="number"
              name="amount"
              value={payment.amount}
              onChange={handleCollection}
            />
          </div>
        </div>
        <div className="extraPaymentMode">
          <div className="paymentModeTitle">
            <p>Mode Of Payment</p>
          </div>
          <div
            className={`paymentModeUnit ${payment.mode == "cash" ? "activeMode" : ""
              }`}
            onClick={() => setPayment({ ...payment, mode: "cash" })}
          >
            <img src="Assets/Payment/cash.png" />
            <div className="paymentModeName">
              <p>Cash</p>
            </div>
          </div>
          <div
            className={`paymentModeUnit ${payment.mode == "gpay" ? "activeMode" : ""
              }`}
            onClick={() => setPayment({ ...payment, mode: "gpay" })}
          >
            <img src="Assets/Payment/gpay.png" />
            <div className="paymentModeName">
              <p>Gpay</p>
            </div>
          </div>
          <div
            className={`paymentModeUnit ${payment.mode == "phonepe" ? "activeMode" : ""
              }`}
            onClick={() => setPayment({ ...payment, mode: "phonepe" })}
          >
            <img src="Assets/Payment/phonepe.png" />
            <div className="paymentModeName">
              <p>Phonepe</p>
            </div>
          </div>
          <div
            className={`paymentModeUnit ${payment.mode == "paytm" ? "activeMode" : ""
              }`}
            onClick={() => setPayment({ ...payment, mode: "paytm" })}
          >
            <img src="Assets/Payment/paytm.png" />
            <div className="paymentModeName">
              <p>Paytm</p>
            </div>
          </div>
        </div>
        <div className="extraUnitData">
          <button onClick={handlePayment}>Make Payment</button>
        </div>
      </div>
      ;
    </div>
  );
};

export default Payment;
