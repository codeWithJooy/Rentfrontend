import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getStudentFood } from "../../../actions/Student/studentAction";
let dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const StudentMenu = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  let today = new Date()
  const [foodData, setFoodData] = useState([])
  const { userId, propertyId } = useSelector(state => state.student.studentData)
  useEffect(() => {
    (async () => {
      let data = await getStudentFood(userId, propertyId, dayArray[today.getDay()])
      setFoodData(data)
      console.log(data)
    })()
  }, [])
  if (foodData) {
    return (
      <div className="stuMainUnit">
        <div className="stuMainHeader">
          <p>Today's Menu</p>
        </div>
        <div className="stuMenuSection">
          {
            foodData && foodData.length > 0 &&
            <Slider {...settings}>
              {
                foodData.map((unit, key) => (
                  <MenuCard
                    type={unit.title}
                    start={unit.start}
                    end={unit.end}
                    fg={unit.fg}
                    bg={unit.bg}
                    icon={unit.icon}
                    food={unit.food}
                    key={key}
                  />
                ))
              }
            </Slider>
          }
          {
            foodData && foodData.length <= 0 &&
            <Slider {...settings}>


              <MenuCard
                type={"Breakfast"}
                start={""}
                end={""}
                fg={"#33475b"}
                bg={"#d3d3d3"}
                icon={"Assets/Food/breakfast.png"}
                food={""}

              />
              <MenuCard
                type={"Lunch"}
                start={""}
                end={""}
                fg={"#33475b"}
                bg={"#d3d3d3"}
                icon={"Assets/Food/lunch.png"}
                food={""}

              />
              <MenuCard
                type={"Snacks"}
                start={""}
                end={""}
                fg={"#33475b"}
                bg={"#d3d3d3"}
                icon={"Assets/Food/snacks.png"}
                food={""}

              />
              <MenuCard
                type={"Dinner"}
                start={""}
                end={""}
                fg={"#33475b"}
                bg={"#d3d3d3"}
                icon={"Assets/Food/dinner.png"}
                food={""}

              />

            </Slider>
          }

        </div>
      </div>
    );
  }
  else {
    return <></>
  }
};

export default StudentMenu;

const MenuCard = ({ type, start, end, bg, fg, icon, food }) => {
  return (
    <div className="stuMenuCard" style={{ background: bg }}>
      <div className="stuMenuType">
        <div className="stuMenuTypeName">
          <p>{type}</p>
        </div>
        <div className="setMenuTypeTime">
          <p>{start}-{end}</p>
        </div>
      </div>
      <div className="stuMenuDetails">
        <div className="stuMenuText">
          <p style={{ color: fg }}>{food ? food : `Kitchen is closed for ${type}.Please Contact Pg Owner.`}</p>
        </div>
        <div className="stuMenuImage">
          <img src={icon} />
        </div>
      </div>
    </div>
  );
};
