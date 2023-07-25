import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useSelector, useDispatch } from "react-redux";
import "./Dues.css";
import { setDuesPage } from "../../actions/duesAction";
import Dues from "./Dues";
import DuesDashboard from "./DuesDashboard";
import DuesList from "./DuesList";
import DuesCollection from "./DuesCollection";
const DuesMain = () => {
  const [page, setPage] = useState(useSelector((state) => state.due.duePage));
  return (
    <div className="duesMain">
      <Header />
      <div className="duesMainContainer">
        <DuesNav page={page} setPage={setPage} />
        {page == "add" && <Dues />}
        {page == "dues" && <DuesList />}
        {page == "dashboard" && <DuesDashboard />}
        {page == "collections" && <DuesCollection />}
      </div>
      <Footer page={"Money"} />
    </div>
  );
};
export default DuesMain;

const DuesNav = ({ page, setPage }) => {
  const dispatch = useDispatch();
  const handleDuePage = (val) => {
    dispatch(setDuesPage(val));
    setPage(val);
  };
  return (
    <div className="duesNav">
      <div
        className={`duesNavUnit ${page == "dashboard" ? "duesNavActive" : ""}`}
        onClick={() => handleDuePage("dashboard")}
      >
        <p>Dashboard</p>
      </div>
      <div
        className={`duesNavUnit ${page == "add" ? "duesNavActive" : ""}`}
        onClick={() => handleDuePage("add")}
      >
        <p>Add Dues</p>
      </div>
      <div
        className={`duesNavUnit ${page == "dues" ? "duesNavActive" : ""}`}
        onClick={() => handleDuePage("dues")}
      >
        <p>Dues</p>
      </div>
      <div
        className={`duesNavUnit ${
          page == "collections" ? "duesNavActive" : ""
        }`}
        onClick={() => handleDuePage("collections")}
      >
        <p>Collections</p>
      </div>
      <div
        className={`duesNavUnit ${page == "reports" ? "duesNavActive" : ""}`}
        onClick={() => handleDuePage("reports")}
      >
        <p>Reports</p>
      </div>
    </div>
  );
};
