import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "./Expense.css";
import {
  getExpense,
  getExpenseCount,
  getTotaExpense,
  setExpenseCategory,
} from "../../actions/expenseActions";
import { expenseData } from "../../data/expenseData";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { beautiDate } from "../../helper";
import { updateToast } from "../../actions/toastActions";
import { CodeAnalogy } from "../../Components/Toasty/Toasty";

const Expense = () => {
  const { userId, propertyId } = useSelector((state) => state.user);
  const [cat, setCat] = useState(false);
  const [expenseData, setExpenseData] = useState([]);
  const [forceUpdate, setForceUpdate] = useState(true);
  const handleCat = () => {
    setCat(true);
  };
  useEffect(() => {
    if (!forceUpdate) return;
    (async () => {
      let data = await getExpense(userId, propertyId);
      if (data) {
        setExpenseData(data);
        setForceUpdate(false);
      }
    })();
  }, [forceUpdate]);
  if (!forceUpdate) {
    return (
      <div className="expenseMain">
        <Header />
        <div className="expenseSection">
          <ExpenseMainCard />
          <button onClick={handleCat} className="expenseButton">
            Add Expense
          </button>
          {expenseData &&
            expenseData
              .toReversed()
              .map((unit, key) => (
                <ExpenseUnitCard
                  expenseName={unit.expenseName}
                  amount={unit.amount}
                  date={unit.date}
                  paidBy={unit.paidBy}
                  paidTo={unit.paidTo}
                  mode={unit.mode}
                  image={unit.image}
                  key={key}
                />
              ))}

          {cat && <ExpenseCategory setCat={setCat} />}
        </div>
        <Footer page={"Money"} />
      </div>
    );
  } else return <></>;
};

export default Expense;
const ExpenseUnitCard = ({
  expenseName,
  amount,
  date,
  paidBy,
  paidTo,
  mode,
  image,
}) => {
  const [open, setOpen] = useState(false);
  const handleBillOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="expenseMainCard">
      <div className="expenseTop">
        <div className="expenseUnit">
          <div className="expenseType">
            <p>{expenseName}</p>
          </div>
          <div className="expenseAmount">
            <p>Rs {amount}</p>
          </div>
        </div>
        <div className="expenseUnit">
          <div className="expenseType">{beautiDate(date)}</div>
          <div className="expenseAmountPay">
            <p>{mode}</p>
          </div>
        </div>
      </div>
      <div className="expenseBottom">
        <div className="paid">
          <p>Paid By {paidBy}</p>
        </div>
        <div className="paid mid">
          <p>Paid To {paidTo} </p>
        </div>
        <div className="expenseIconHolder">
          {open && (
            <img
              className="expenseOpen"
              src="Assets/Tenant/down.png"
              onClick={handleBillOpen}
            />
          )}
          {!open && (
            <img
              className="expenseOpen"
              src="Assets/Tenant/up.png"
              onClick={handleBillOpen}
            />
          )}
        </div>
      </div>
      {open && (
        <div className="expenceBill">
          <img src={image} />
        </div>
      )}
    </div>
  );
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
  const { userId, propertyId } = useSelector((state) => state.user);
  let [total, setTotal] = useState([]);
  let [count, setCount] = useState([]);
  let [filter, setFilter] = useState(false);
  let [filterSelected, setFilterSelected] = useState("range");
  const handleChange = () => {
    updateToast({
      code: CodeAnalogy.ERROR,
      title: "Feature Will Be available Soon",
    });
  };
  const handleFilterSelected = (val) => {
    setFilterSelected(val);
  };
  useEffect(() => {
    (async () => {
      let totalData = await getTotaExpense(userId, propertyId);
      let countData = await getExpenseCount(userId, propertyId);
      setTotal(totalData);
      setCount(countData);
    })();
  });
  return (
    <div className="expenseMainCard">
      <div className="expenseTracker">
        <div
          className="trackerUnit"
          style={{ borderRight: "2px solid #f5f3f4" }}
        >
          <div className="trackerTop">
            <p>{total}</p>
          </div>
          <div className="trackerTitle">
            <p>Total Expenses</p>
            <img src="Assets/Expense/expenses.png" />
          </div>
        </div>
        <div className="trackerUnit">
          <div className="trackerTop">
            <p>{count}</p>
          </div>
          <div className="trackerTitle">
            <p>Expense Count</p>
            <img src="Assets/Expense/account.png" />
          </div>
        </div>
      </div>
      <div className="expenseMainTop">
        <div className="filterSection" onClick={() => setFilter(true)}>
          <img src="Assets/Expense/filter.png" />
          <p>Filter</p>
        </div>
      </div>
      {filter && (
        <div className="expenseFilterPage">
          <div className="filterContainer">
            <div className="filterHeader">
              <div className="filterLeft">
                <img
                  src="Assets/Expense/left-arrow.png"
                  onClick={() => setFilter(false)}
                />
                <p>Filter</p>
              </div>
              <div className="filterRight">
                <p onClick={() => setFilter(false)}>Clear Filters</p>
              </div>
            </div>
            <div className="filterSelection">
              <div
                className={
                  filterSelected === "range"
                    ? "filterSelected"
                    : "filterSelectionUnit"
                }
                onClick={() => setFilterSelected("range")}
              >
                <p>Date Range</p>
              </div>
              <div
                className={
                  filterSelected === "member"
                    ? "filterSelected"
                    : "filterSelectionUnit"
                }
                onClick={() => setFilterSelected("member")}
              >
                <p>Member Filter</p>
              </div>
              <div
                className={
                  filterSelected === "mode"
                    ? "filterSelected"
                    : "filterSelectionUnit"
                }
                onClick={() => setFilterSelected("mode")}
              >
                <p>Payment Filter</p>
              </div>
            </div>
            <div className="filterResult">
              {filterSelected == "range" && (
                <div className="resultContainer">
                  <div className="rangeSelection">
                    <div className="selectionUnit">
                      <label>Date From</label>
                      <input type="date" />
                    </div>
                    <div className="selectionUnit">
                      <label>Date To</label>
                      <input type="date" />
                    </div>
                  </div>
                </div>
              )}
              {filterSelected == "member" && (
                <div className="resultContainer">
                  <div className="rangeSelection">
                    <div className="selectionUnit">
                      <label>Member Expense</label>
                      <select>
                        <option>All</option>
                        <option>Abhi</option>
                        <option>Hemant</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}
              {filterSelected == "mode" && (
                <div className="resultContainer">
                  <div className="rangeSelection">
                    <div className="selectionUnit">
                      <label>Payment Mode</label>
                      <select>
                        <option>All</option>
                        <option>Cash</option>
                        <option>Gpay</option>
                        <option>PhonePay</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="filterApply">
              <button onClick={() => setFilter(false)}>Apply Filter</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
