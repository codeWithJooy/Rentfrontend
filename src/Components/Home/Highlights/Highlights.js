import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Highlights.css";
import HighlightsUnit from "./HIghlightsUnit";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { monthName } from "../../../helper";
import {
  getCurrentDeposit,
  getMonthCollection,
  getMonthDue,
  getMonthExpense,
  getTodaysCollection,
  getTotalDue,
} from "../../../actions/summaryAction";
const Highlights = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const [loader, setLoader] = useState(true);
  const { userId, propertyId } = useSelector((state) => state.user);
  const month = monthName(new Date().getMonth()).name;
  const year=new Date().getFullYear()
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
    color: "green",
  });
  const [monthDue, setMonthDue] = useState({
    title: month + "'s Due",
    icon: "Assets/Home/Highlights/due.png",
    amount: 0,
    color: "#a4161a",
  });
  const [totalDue, setTotalDue] = useState({
    title: "Total Due",
    icon: "Assets/Home/Highlights/due.png",
    amount: 0,
    color: "#a4161a",
  });
  const [monthExpense, setMonthExpense] = useState({
    title: month + "'s Expense",
    icon: "Assets/Home/Highlights/expense.png",
    amount: 0,
    color: "#e4a11b",
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
      setMonthDue({
        ...monthDue,
        amount: await getMonthDue(userId, propertyId),
      });
      setTotalDue({
        ...totalDue,
        amount: await getTotalDue(userId, propertyId),
      });
      setMonthExpense({
        ...monthExpense,
        amount: await getMonthExpense(userId, propertyId),
      });
      setLoader(false);
    })();
  }, []);
  if (!loader) {
    return (
      <div className="highlights">
        <div className="highlightTitle">
          <span>{month} {year} Summary</span>
        </div>
        <Slider {...settings}>
          <HighlightsUnit val={todayCollection} />
          <HighlightsUnit val={monthCollection} />
          <HighlightsUnit val={currentDeposit} />
          <HighlightsUnit val={monthDue} />
          <HighlightsUnit val={totalDue} />
          <HighlightsUnit val={monthExpense} />
        </Slider>
      </div>
    );
  } else return <></>;
};

export default Highlights;
