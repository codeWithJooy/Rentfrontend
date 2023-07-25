import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./Dues.css";
import { monthName } from "../../helper";
import {
  getCurrentDeposit,
  getMonthCollection,
  getMonthDue,
  getMonthExpense,
  getTodaysCollection,
  getTotalDue,
} from "../../actions/summaryAction";

const DuesDashboard = () => {
  const { userId, propertyId, propertyName } = useSelector(
    (state) => state.user
  );
  const month = monthName(new Date().getMonth()).name;
  const [loader, setLoader] = useState(true);
  const [todayCollection, setTodayCollection] = useState({
    title: "Today's Collection",
    icon: "Assets/Home/Highlights/collection.png",
    amount: 0,
    color: "green",
  });
  const [monthCollection, setMonthCollection] = useState({
    title: month + "'s Collection",
    icon: "Assets/Home/Highlights/collection.png",
    amount: 0,
    color: "green",
  });
  const [currentDeposit, setCurrentDeposit] = useState({
    title: "Current Deposit",
    icon: "Assets/Home/Highlights/deposit.png",
    amount: 0,
    color: "#e4a11b",
  });
  const [totalDue, setTotalDue] = useState({
    title: "Unpaid Due's",
    icon: "Assets/Home/Highlights/due.png",
    amount: 0,
    color: "#a4161a",
  });
  useEffect(() => {
    (async () => {
      setLoader(true);
      setTodayCollection({
        ...todayCollection,
        amount: await getTodaysCollection(userId, propertyId),
      });
      setMonthCollection({
        ...monthCollection,
        amount: await getMonthCollection(userId, propertyId),
      });
      setCurrentDeposit({
        ...currentDeposit,
        amount: await getCurrentDeposit(userId, propertyId),
      });
      setTotalDue({
        ...totalDue,
        amount: await getTotalDue(userId, propertyId),
      });
      setLoader(false);
    })();
  }, []);
  if (!loader) {
    return (
      <div className="duesContainer">
        <div className="duesDashCard">
          <div className="duesDashTop">
            <img src="Assets/Footer/home_selected.png" />
            <div className="duesDashTopName">
              <p>{propertyName}</p>
            </div>
          </div>
          <div className="duesDashData">
            <DuesDashUnit val={totalDue} />
            <DuesDashUnit val={todayCollection} />
            <DuesDashUnit val={monthCollection} />
            <DuesDashUnit val={currentDeposit} />
          </div>
        </div>
      </div>
    );
  } else return <></>;
};

export default DuesDashboard;

const DuesDashUnit = ({ val }) => {
  return (
    <div className="dashDataUnit">
      <div className="dashDataTitle">
        <p>{val.title}</p>
      </div>
      <div className="dashDataValue" style={{ color: val.color }}>
        <p>&#8377; {val.amount}</p>
      </div>
    </div>
  );
};
