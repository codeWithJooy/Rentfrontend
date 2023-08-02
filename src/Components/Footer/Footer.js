import React from "react";
import "./Footer.css";

import FooterUnit from "./FooterUnit";

const property = [
  {
    title: "Home",
    icon: "Assets/Footer/home.png",
    iconSelected: "Assets/Footer/home_selected.png",
    link: "/home",
  },
  {
    title: "Money",
    icon: "Assets/Footer/wallet.png",
    iconSelected: "Assets/Footer/wallet_selected.png",
    link: "/dues",
  },
  {
    title: "My Profile",
    icon: "Assets/Footer/plus.png",
    iconSelected: "Assets/Footer/plus_selected.png",
    link: "/profile",
  },
  {
    title: "Tenants",
    icon: "Assets/Footer/group.png",
    iconSelected: "Assets/Footer/group_selected.png",
    link: "/Tenant",
  },
  {
    title: "Property",
    icon: "Assets/Footer/apartment.png",
    iconSelected: "Assets/Footer/apartment_selected.png",
    link: "/property",
  },
];
const Footer = ({ page = "Home" }) => {
  return (
    <div className="footer">
      <div className="footerContainer">
        {property.map((item, keyVal) => (
          <FooterUnit
            title={item.title}
            icon={item.icon}
            iconSelected={item.iconSelected}
            key={keyVal}
            link={item.link}
            page={page}
          />
        ))}
      </div>
    </div>
  );
};

export default Footer;
