import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./Dues.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

import { dueData } from "../../data/due";
import { setDuesType } from "../../actions/duesAction";
const Dues = () => {
  return (
    <div className="duesContainer">
      {dueData.map((data, index) => (
        <DueCard key={index} title={data.title} img={data.img} />
      ))}
    </div>
  );
};
export default Dues;

const DueCard = ({ title, img }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setDuesType(title));
    history.push("/dueadd");
  };
  return (
    <div className="duesUnit">
      <div className="duesUnitTitle">
        <img src={img} />
        <p>{title}</p>
      </div>
      <div className="duesAmount">
        <p>Variable Amount</p>
        <button onClick={handleClick}>Add Dues</button>
      </div>
    </div>
  );
};
