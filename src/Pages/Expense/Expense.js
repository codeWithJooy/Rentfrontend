import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./Expense.css";
import { setExpenseCategory } from "../../actions/expenseActions";
import { expenseData } from "../../data/expenseData";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const Expense = () => {
  const [cat, setCat] = useState(false);
  const handleCat = () => {
    setCat(true);
  };
  return (
    <div className="expenseMain">
      <Header />
      <div className="expenseSection">
        <ExpenseMainCard />
        <button onClick={handleCat} className="expenseButton">
          Add Expense
        </button>
        <ExpenseUnitCard />
        {cat && <ExpenseCategory setCat={setCat} />}
      </div>
      <Footer page={"Money"} />
    </div>
  );
};

export default Expense;
const ExpenseUnitCard = () => {
  return <div className="expenseMainCard"></div>;
};

const ExpenseCategory = ({ setCat }) => {
  return (
    <div className="categoryMain">
      <div className="categoryCross">
        <img src="Assets/components/cross.png" onClick={() => setCat(false)} />
      </div>
      <div className="categoryContainer">
        <div className="categoryTitle">Select Expense Category</div>
        <div className="categoryUnitsContainer">
          {expenseData.map((data, index) => (
            <ExpenseCategoryUnit
              title={data.title}
              img={data.img}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const ExpenseCategoryUnit = ({ title, img }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setExpenseCategory({ title, img }));
    history.push("/expensedetails");
  };
  return (
    <div className="categoryUnit" onClick={handleClick}>
      <img src={img} />
      <p>{title}</p>
    </div>
  );
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
            <p>0</p>
          </div>
          <div className="trackerTitle">
            <p>Total Expenses</p>
            <img src="Assets/Tenant/edit.png" />
          </div>
        </div>
        <div className="trackerUnit">
          <div className="trackerTop">
            <p>0</p>
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
