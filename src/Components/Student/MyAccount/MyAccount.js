import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dispatchAction } from "../../../actions/actionHelper";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  getStudentDues,
  setStudentPaymentDetails,
} from "../../../actions/Student/studentAction";
import { SET_STUDENT_PAYMENT_DETAILS } from "../../../actionTypes/studentActionType";
const MyAccount = ({ setPaymentModel, forceUpdate, setForceUpdate }) => {
  const { userId, propertyId, tenantId } = useSelector(
    (state) => state.student.studentData
  );

  const [duesData, setDuesData] = useState(null);
  useEffect(() => {
    (async () => {
      let data = await getStudentDues(userId, propertyId, tenantId);
      console.log("data is", data);
      setDuesData(data);
      setForceUpdate(false);
    })();
  }, [forceUpdate]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  if (!forceUpdate) {
    return (
      <div className="stuMainUnit">
        <div className="stuMainHeader">
          <p>My Accounts</p>
        </div>
        <div className="stuMainSection">
          <Slider {...settings}>
            {duesData &&
              duesData.dues
                .filter(
                  (duesUnit) =>
                    parseInt(duesUnit.due) - parseInt(duesUnit.collection) > 0
                )
                .map((unit, index) => (
                  <AccountCard data={unit} setPaymentModel={setPaymentModel} />
                ))}
          </Slider>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default MyAccount;

const AccountCard = ({ data, setPaymentModel }) => {
  const { userId, propertyId, tenantId } = useSelector(
    (state) => state.student.studentData
  );
  const { type, due, collection } = data;
  let obj = {
    userId,
    propertyId,
    tenantId,
    type,
    due: parseInt(due) - parseInt(collection),
    collection: parseInt(due) - parseInt(collection),
  };
  const dispatchUnit = useDispatch();

  const handlePaymentNow = () => {
    setPaymentModel(true);
    dispatchAction(SET_STUDENT_PAYMENT_DETAILS, obj);
    //setStudentPaymentDetails(obj);
  };

  return (
    <div className="stuAmountCard">
      <div className="stuAmountTitle">
        <p>{type}</p>
      </div>
      <div className="stuAmountDetails">
        <div className="stuAmountType">
          <p>&#8377; {parseInt(due) - parseInt(collection)}</p>
        </div>
        <div className="stuAmountImg">
          <img src={"Assets/Students/userHeader.png"} />
        </div>
      </div>
      {data.status == "pending" && (
        <div className="stuAmountPay">
          <p>Pending</p>
        </div>
      )}
      {data.status != "pending" && (
        <div className="stuAmountPay" onClick={handlePaymentNow}>
          <p>Pay Now</p>
        </div>
      )}
    </div>
  );
};
