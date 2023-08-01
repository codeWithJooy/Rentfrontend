import React from "react";
import { useHistory } from "react-router-dom";
const student = [
  {
    title: "Home",
    icon: "Assets/Students/Footer/home.png",
    iconSelected: "Assets/Students/Footer/home_selected.png",
    link: "/student",
  },
  {
    title: "Account",
    icon: "Assets/Students/Footer/account.png",
    iconSelected: "Assets/Students/Footer/account_selected.png",
    link: "/studentAccount",
  },
  {
    title: "Profile",
    icon: "Assets/Students/Footer/user.png",
    iconSelected: "Assets/Students/Footer/user_selected.png",
    link: "/student",
  },
  {
    title: "Issues",
    icon: "Assets/Students/Footer/complaint.png",
    iconSelected: "Assets/Students/Footer/complaint_selected.png",
    link: "/complaint",
  },
];
const StudentFooter = ({ page = "Home" }) => {
  return (
    <div className="stuFooter">
      {student.map((item, keyVal) => (
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
  );
};

export default StudentFooter;

const FooterUnit = ({ title, icon, iconSelected, link, page }) => {
  const history = useHistory();
  const color = page === title ? "#1672EC" : "#161a1d";
  const bg = page === title ? "#E2EDFC" : "transparent";
  const handleClick = () => {
    history.push(link);
  };
  return (
    <div
      className="stuFooterUnit"
      onClick={handleClick}
      style={{ background: bg }}
    >
      <img src={`${page === title ? iconSelected : icon}`} />
      <div className="stuFooterUnitText">
        <p style={{ color: color }}>{title}</p>
      </div>
    </div>
  );
};
