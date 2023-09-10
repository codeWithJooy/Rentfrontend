import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HostelLife = ({ setEviction, setHost,setLate }) => {
  let history = useHistory()
  const handleIssue = () => {
    history.push("/complaint")
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <div className="stuMainUnit">
      <div className="stuMainHeader">
        <p>Life in Hostel</p>
      </div>
      <div className="stuMenuSection">
        <Slider {...settings}>
          <HostelCard
            title={"Facing Issues ?"}
            description={"Register complaints in one click"}
            fg={"#33B8C8"}
            bg={"#EEFDFF"}
            icon={"Assets/Students/complaint.png"}
            nextIcon={"Assets/Students/nextIssue.png"}
            onClick={handleIssue}
          />
          <HostelCard
            title={"Hosting Friends ?"}
            description={"Inform Your Owner and invite friends"}
            fg={"#ffa839"}
            bg={"#fff4ee"}
            icon={"Assets/Students/hosting.png"}
            nextIcon={"Assets/Students/nextFriends.png"}
            onClick={setHost}
          />
          {/* <HostelCard
            title={"Leaving Property?"}
            description={"Inform Your Owner to give 30 days Notice."}
            fg={"#803EAA"}
            bg={"#F2EEFF"}
            icon={"Assets/Students/nightout.png"}
            nextIcon={"Assets/Students/nextEviction.png"}
            onClick={setEviction}
          /> */}
          <HostelCard
            title={"Returning Late ?"}
            description={"Inform Your Owner and take permission"}
            fg={"#803EAA"}
            bg={"#F2EEFF"}
            icon={"Assets/Students/late.png"}
            nextIcon={"Assets/Students/nextEviction.png"}
            onClick={setLate}
          />
        </Slider>
      </div>
    </div>
  );
};

export default HostelLife;

const HostelCard = ({ title, description, fg, bg, icon, nextIcon, onClick }) => {
  return (
    <div className="hostelCard" style={{ background: bg }} onClick={onClick} >
      <div className="hostelCardHeader">
        <p style={{ color: fg }}>{title}</p>
      </div>
      <div className="hostelCardSubHeader">
        <p style={{ color: fg }}>{description} </p>
      </div>
      <div className="hostelCardBottom">
        <div className="hostelCardNext">
          <img src={nextIcon} />
        </div>
        <div className="hostelCardImage">
          <img src={icon} />
        </div>
      </div>
    </div>
  );
};
