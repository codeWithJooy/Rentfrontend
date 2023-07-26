import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HostelLife = () => {
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
            fg={"#ffa839"}
            bg={"#fff4ee"}
            icon={"Assets/Students/complaint.png"}
          />
          <HostelCard
            title={"Facing Issues ?"}
            fg={"#ffa839"}
            bg={"#fff4ee"}
            icon={"Assets/Students/nightout.png"}
          />
          <HostelCard
            title={"Facing Issues ?"}
            fg={"#ffa839"}
            bg={"#fff4ee"}
            icon={"Assets/Students/hosting.png"}
          />
        </Slider>
      </div>
    </div>
  );
};

export default HostelLife;

const HostelCard = ({ title, fg, bg, icon }) => {
  return (
    <div className="hostelCard" style={{ background: bg }}>
      <div className="hostelCardHeader">
        <p style={{ color: fg }}>{title}</p>
      </div>
      <div className="hostelCardSubHeader">
        <p style={{ color: fg }}>Register your complaints in one click </p>
      </div>
      <div className="hostelCardBottom">
        <div className="hostelCardNext">
          <img src="Assets/Students/next.png" />
        </div>
        <div className="hostelCardImage">
          <img src={icon} />
        </div>
      </div>
    </div>
  );
};
