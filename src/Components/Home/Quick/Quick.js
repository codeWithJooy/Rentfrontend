import React from "react";
import "./Quick.css";
import QuickUnit from "./QuickUnit";
import { homeData } from "../../../data/homeData";
const Quick = () => {
  return (
    <div className="quick">
      <div className="quickTitle">
        <span>Quick Action</span>
      </div>
      <div className="quickContainer">
        {homeData.map((data, index) => (
          <QuickUnit
            key={index}
            title={data.title}
            img={data.img}
            link={data.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Quick;
