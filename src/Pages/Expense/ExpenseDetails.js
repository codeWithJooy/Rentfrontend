import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Expense.css";
import { addExpense } from "../../actions/expenseActions";
import moment from "moment/moment";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useHistory } from "react-router-dom";

const ExpenseDetails = () => {
  const category = useSelector((state) => state.expense.category);
  const user = useSelector((state) => state.user);
  const [currentDate, setCurrentDate] = useState(moment().format("YYYY-MM-DD"));
  const [expense, setExpense] = useState({
    userId: user.userId,
    propertyId: user.propertyId,
    expenseName: category.title,
    amount: 0,
    date: currentDate,
    paidBy: "",
    paidTo: "",
    description: "",
    mode: "cash",
  });
  const history = useHistory();
  const handleChange = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };
  const handleDate = (e) => {
    const newDate = moment(new Date(e.target.value)).format("YYYY-MM-DD");
    setCurrentDate(newDate);
    setExpense({
      ...expense,
      date: newDate,
    });
  };
  const handleAdd = () => {
    (async () => {
      if (
        await addExpense(
          expense.userId,
          expense.propertyId,
          expense.expenseName,
          expense.amount,
          expense.date,
          expense.paidBy,
          expense.paidTo,
          expense.description,
          expense.mode
        )
      ) {
        history.push("/expense");
      }
    })();
  };
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
          <input
            type="number"
            name="amount"
            value={expense.amount}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="expenseHolder">
        <div className="expenseAddSection">
          <p>Date</p>
          <input type="date" value={expense.date} onchange={handleDate} />
        </div>
      </div>
      <div className="expenseHolder">
        <div className="expenseAddSection">
          <p>Paid By</p>
          <input
            type="text"
            name="paidBy"
            value={expense.paidBy}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="expenseHolder">
        <div className="expenseAddSection">
          <p>Paid To</p>
          <input
            type="text"
            name="paidTo"
            value={expense.paidTo}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="expenseHolder">
        <div className="expenseAddSection">
          <p>Description</p>
          <input
            type="text"
            name="description"
            value={expense.description}
            onChange={handleChange}
          />
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
        <button className="expenseButton" onClick={handleAdd}>
          Add Expense
        </button>
      </div>
    </div>
  );
};

export default ExpenseDetails;
