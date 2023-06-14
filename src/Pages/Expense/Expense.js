import React from "react";
import "./Expense.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
const Expense = () => {
  return (
    <div className="expenseMain">
      <Header />
      <div className="expenseSection">
        <ExpenseMainCard />
        <button className="expenseButton">Add Expense</button>
        <ExpenseUnitCard />
      </div>
      <Footer />
    </div>
  );
};

export default Expense;
const ExpenseUnitCard = () => {
  return <div className="expenseMainCard"></div>;
};
const ExpenseMainCard = () => {
  return (
    <div className="expenseMainCard">
      <div className="expenseMainTop">
        <div className="expenseDuration">Duration :</div>
        <div className="expenseMonth">
          <p>June</p>
        </div>
      </div>
      <div className="expenseTracker">
        <div
          className="trackerUnit"
          style={{ borderRight: "2px solid #f5f3f4" }}
        >
          <div className="trackerTop">
            <p>500</p>
          </div>
          <div className="trackerTitle">
            <p>Total Expenses</p>
            <img src="Assets/Tenant/edit.png" />
          </div>
        </div>
        <div className="trackerUnit">
          <div className="trackerTop">
            <p>500</p>
          </div>
          <div className="trackerTitle">
            <p>Expense Count</p>
            <img src="Assets/Tenant/edit.png" />
          </div>
        </div>
      </div>
    </div>
  );
};
