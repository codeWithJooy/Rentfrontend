import React from "react";
import { useSelector } from "react-redux";
import "./Expense.css";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const ExpenseDetails = () => {
  const category = useSelector((state) => state.expense.category);
  return (
    <div className="expenseMain">
      <Header name={"Add Expense"} type="back" link="/expense" />
      <div className="pageHeader">
        <img src={category.img} />
        <p>{category.title}</p>
      </div>
      <div className="expenseHolder">
        <div className="expenseAddSection">
          <p>Amount</p>
          <input type="number" />
        </div>
      </div>
      <div className="expenseHolder">
        <div className="expenseAddSection">
          <p>Date</p>
          <input type="date" />
        </div>
      </div>
      <div className="expenseHolder">
        <div className="expenseAddSection">
          <p>Paid By</p>
          <input type="text" />
        </div>
      </div>
      <div className="expenseHolder">
        <div className="expenseAddSection">
          <p>Paid To</p>
          <input type="text" />
        </div>
      </div>
      <div className="expenseHolder">
        <div className="expenseAddSection">
          <p>Description</p>
          <input type="text" />
        </div>
      </div>
      <div className="paymentMode">
        <p>Payment Mode</p>
        <div className="paymentHolder">
          <div className="paymentUnits paymentActive">
            <img src="Assets/Payment/cash.png" />
            <p>Cash</p>
          </div>
          <div className="paymentUnits">
            <img src="Assets/Payment/gpay.png" />
            <p>GPay</p>
          </div>
          <div className="paymentUnits">
            <img src="Assets/Payment/phonepe.png" />
            <p>PhonePe</p>
          </div>
          <div className="paymentUnits">
            <img src="Assets/Payment/paytm.png" />
            <p>Paytm</p>
          </div>
        </div>
      </div>
      <div className="expenseHolder">
        <button className="expenseButton">Add Expense</button>
      </div>
    </div>
  );
};

export default ExpenseDetails;
