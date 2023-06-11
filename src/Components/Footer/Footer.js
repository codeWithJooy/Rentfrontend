import React from "react";
import "./Footer.css";

import FooterUnit from "./FooterUnit";

const property = [
  {
    title: "Home",
    icon: "Assets/Footer/apartment.png",
  },
  {
    title: "Money",
    icon: "Assets/Footer/apartment.png",
  },
  {
    title: "Add",
    icon: "Assets/Footer/plus.png",
  },
  {
    title: "Money",
    icon: "Assets/Footer/apartment.png",
  },
  {
    title: "Property",
    icon: "Assets/Footer/apartment.png",
  },
];
const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContainer">
        {property.map((item, keyVal) => (
          <FooterUnit title={item.title} icon={item.icon} key={keyVal} />
        ))}
      </div>
    </div>
  );
};

export default Footer;
