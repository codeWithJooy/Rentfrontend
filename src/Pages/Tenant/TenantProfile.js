import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import moment from "moment";
import "./Tenant.css";
import Header from "../../Components/Header/Header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getATenant } from "../../actions/tenantAction";
import {
  addCollection,
  getTenantCollection,
} from "../../actions/collectionAction";
import {
  calculateDayDifference,
  calculateSingleDue,
  calculateTotalDues,
} from "../../duesHelper";

const TenantProfile = () => {
  const history = useHistory();
  const [navActive, setNavActive] = useState("profile");
  const { userId, propertyId } = useSelector((state) => state.user);
  const tenantId = useSelector((state) => state.tenant.selectedTenant);
  const [forceUpdate, setForceUpdate] = useState(true);

  useEffect(() => {
    if (forceUpdate) {
      getATenant(userId, propertyId, tenantId);
      getTenantCollection(userId, propertyId, tenantId);
      setForceUpdate(false);
    }
  }, [forceUpdate]);
  return (
    <div className="tenant">
      <Header name={"Tenants Profile"} link={"/tenant"} type={"back"} />
      <div className="memNav">
        <div
          className={`memNavUnit ${
            navActive == "profile" ? "memNavActive" : ""
          }`}
          onClick={() => setNavActive("profile")}
        >
          <p>Profile Details</p>
        </div>
        <div
          className={`memNavUnit ${
            navActive == "passbook" ? "memNavActive" : ""
          }`}
          onClick={() => setNavActive("passbook")}
        >
          <p>Passbook</p>
        </div>
      </div>
      {navActive == "profile" && <TenantPersonal />}
      {navActive != "profile" && (
        <TenantPassBook setForceUpdate={setForceUpdate} />
      )}
    </div>
  );
};

export default TenantProfile;

const TenantPassBook = ({ setForceUpdate }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    swipeToSlide: true,
  };
  const [type, setType] = useState("dues");
  const dues = useSelector((state) => state.tenant.singleTenant.dues);
  const collections = useSelector((state) => state.collection.tenantCollection);
  const { due, collection } = calculateTotalDues(dues, collections);
  const [topActive, setTopActive] = useState("Total Dues");
  const [openCategory, setOpenCategory] = useState(false);
  const [dueDetail, setDueDetail] = useState({});
  return (
    <div className="tenantHolder">
      <div className="passbookTop">
        <Slider {...settings}>
          <PassbookTopUnit
            amount={due}
            title={"Total Dues"}
            topActive={topActive}
            setTopActive={setTopActive}
          />
          <PassbookTopUnit
            amount={collection}
            title={"Total Collection"}
            topActive={topActive}
            setTopActive={setTopActive}
          />
          <PassbookTopUnit
            amount={4000}
            title={"Current Deposit"}
            topActive={topActive}
            setTopActive={setTopActive}
          />
          <PassbookTopUnit
            amount={4000}
            title={"Total Discounts"}
            topActive={topActive}
            setTopActive={setTopActive}
          />
        </Slider>
      </div>
      <div className="passbookBody">
        {topActive == "Total Dues" &&
          dues.map((dueData, val) => (
            <DuesDataCard
              key={val}
              type={dueData.type}
              due={dueData.due}
              dueDate={dueData.dueDate}
              collection={collections}
              setOpenCategory={setOpenCategory}
              setDueDetail={setDueDetail}
            />
          ))}
        {topActive == "Total Collection" &&
          collections.map((col, val) => (
            <DuesCollectionCard
              key={val}
              type={col.type}
              amount={col.amount}
              date={col.date}
              mode={col.mode}
            />
          ))}
      </div>
      {openCategory && (
        <DueCategory
          data={dueDetail}
          setOpenCategory={setOpenCategory}
          setForceUpdate={setForceUpdate}
        />
      )}
    </div>
  );
};

const DuesDataCard = ({
  type,
  due,
  dueDate,
  collection,
  setOpenCategory,
  setDueDetail,
}) => {
  let finalDue = calculateSingleDue(type, due, collection);
  let obj = {
    type,
    finalDue,
    dueDate,
  };
  const handleRecord = () => {
    setDueDetail(obj);
    setOpenCategory(true);
  };
  return (
    <div className="duesDataCard">
      <div className="ddcTop">
        <div className="ddcHead">
          <div className="ddcTitle">
            <p>{type}</p>
          </div>
          <div className="ddcDue">
            <p>Rs {finalDue}</p>
          </div>
        </div>
        <div className="ddcHead">
          <div className="ddcRoom">
            <p>{dueDate}</p>
          </div>
          {calculateDayDifference(dueDate) == -1 && (
            <div className="ddcDueDate">
              <p style={{ color: "#E1C28B", fontWeight: "bold" }}>Due Today</p>
            </div>
          )}
          {calculateDayDifference(dueDate) < -1 && (
            <div className="ddcDueDate">
              <p style={{ color: "red", fontWeight: "bold" }}>
                Late by {Math.abs(calculateDayDifference(dueDate))} days
              </p>
            </div>
          )}
          {calculateDayDifference(dueDate) > -1 && (
            <div className="ddcDueDate">
              <p style={{ color: "lightgreen" }}>
                Due in {calculateDayDifference(dueDate)} days
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="ddcBottom">
        <button className="ddcRecord" onClick={handleRecord}>
          Record Payment
        </button>
        <button className="ddcRemind">Remind To Pay</button>
      </div>
    </div>
  );
};
const DuesCollectionCard = ({ type, amount, date, mode }) => {
  return (
    <div className="duesDataCard">
      <div className="ddcTop">
        <div className="ddcHead">
          <div className="ddcTitle">
            <p>{type}</p>
          </div>
          <div className="ddcDue">
            <p>Rs {amount}</p>
          </div>
        </div>
        <div className="ddcHead">
          <div className="ddcRoom">
            <p>Paid On {date}</p>
          </div>

          <div className="ddcDueDate">
            <p style={{ color: "lightgreen" }}>Paid Using {mode}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
const PassbookTopUnit = ({ amount, title, topActive, setTopActive }) => {
  let color = "#660708";
  if (topActive == "Total Collection") {
    color = "green";
  }
  return (
    <div
      className={`passTopUnit`}
      style={{
        border: title == topActive ? `1px solid ${color}` : "1px solid #d3d3d3",
      }}
      onClick={() => setTopActive(title)}
    >
      <div className="passUnitTop">
        <p style={{ color: title == topActive ? `${color}` : "#161a1d" }}>
          Rs {amount}
        </p>
      </div>
      <div className="passBottom">
        <div className="passBottomName">
          <p>{title}</p>
        </div>
        <div className="passBottomImg">
          <img src="Assets/Announcement/write.png" />
        </div>
      </div>
    </div>
  );
};
const TenantPersonal = () => {
  const [edit, setEdit] = useState(true);
  return (
    <div className="tenantHolder">
      <Personal edit={edit} />
      <Kyc />
      <Parent edit={edit} />
      <Guardian edit={edit} />
      <ParentID />
      <div className="memEdit" onClick={() => setEdit(!edit)}>
        {edit ? "Edit" : "Save"}
      </div>
    </div>
  );
};

const Personal = ({ edit }) => {
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="section">
      <div className="sectionHeader" onClick={handleToggle}>
        <div className="sectionTitle">
          <p>Personal Details</p>
        </div>
        <div className="sectionToggle">
          <img
            src={`${
              toggle
                ? "Assets/components/down.png"
                : "Assets/components/right.png"
            }`}
          />
        </div>
      </div>
      {toggle && (
        <div className="sectionContainer">
          <div className="sectionIpFull">
            <div className="sectionIpHeader">
              <p>Name</p>
            </div>
            <div className="sectionIpInput">
              <input type="text" readOnly={edit} />
            </div>
          </div>
          <div className="sectionIpFull">
            <div className="sectionIpHeader">
              <p>Phone Number</p>
            </div>
            <div className="sectionIpInput">
              <input type="text" readOnly={edit} />
            </div>
          </div>
          <div className="sectionIpFull">
            <div className="sectionIpHeader">
              <p>Alternate Number</p>
            </div>
            <div className="sectionIpInput">
              <input type="text" readOnly={edit} />
            </div>
          </div>
          <div className="sectionIpFull">
            <div className="sectionIpHeader">
              <p>Email</p>
            </div>
            <div className="sectionIpInput">
              <input type="text" readOnly={edit} />
            </div>
          </div>
          <div className="sectionIpFull">
            <div className="sectionIpHeader">
              <p>Date Of Birth</p>
            </div>
            <div className="sectionIpInput">
              <input type="text" readOnly={edit} />
            </div>
          </div>
          <div className="sectionIpFull">
            <div className="sectionIpHeader">
              <p>Blood Group</p>
            </div>
            <div className="sectionIpInput">
              <input type="text" readOnly={edit} />
            </div>
          </div>
          <div className="sectionIpFull">
            <div className="sectionIpHeader">
              <p>Date Of Joining</p>
            </div>
            <div className="sectionIpInput">
              <input type="text" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Kyc = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="section">
      <div className="sectionHeader" onClick={handleToggle}>
        <div className="sectionTitle">
          <p>Documents</p>
        </div>
        <div className="sectionToggle">
          <img
            src={`${
              toggle
                ? "Assets/components/down.png"
                : "Assets/components/right.png"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

const Parent = ({ edit }) => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="section">
      <div className="sectionHeader" onClick={handleToggle}>
        <div className="sectionTitle">
          <p>Parent Details</p>
        </div>
        <div className="sectionToggle">
          <img
            src={`${
              toggle
                ? "Assets/components/down.png"
                : "Assets/components/right.png"
            }`}
          />
        </div>
      </div>
      {toggle && (
        <div className="sectionContainer">
          <div className="sectionIpFull">
            <div className="sectionIpHeader">
              <p>Father's Name</p>
            </div>
            <div className="sectionIpInput">
              <input type="text" readOnly={edit} />
            </div>
          </div>
          <div className="sectionIpFull">
            <div className="sectionIpHeader">
              <p>Father's Phone Number</p>
            </div>
            <div className="sectionIpInput">
              <input type="text" readOnly={edit} />
            </div>
          </div>
          <div className="sectionIpFull">
            <div className="sectionIpHeader">
              <p>Mother's Name</p>
            </div>
            <div className="sectionIpInput">
              <input type="text" readOnly={edit} />
            </div>
          </div>
          <div className="sectionIpFull">
            <div className="sectionIpHeader">
              <p>Mother's Phone Number</p>
            </div>
            <div className="sectionIpInput">
              <input type="text" readOnly={edit} />
            </div>
          </div>
          <div className="sectionIpFull">
            <div className="sectionIpHeader">
              <p>Parent Occupation</p>
            </div>
            <div className="sectionIpInput">
              <input type="text" readOnly={edit} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
const Guardian = ({ edit }) => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="section">
      <div className="sectionHeader" onClick={handleToggle}>
        <div className="sectionTitle">
          <p>Local Guardian Details</p>
        </div>
        <div className="sectionToggle">
          <img
            src={`${
              toggle
                ? "Assets/components/down.png"
                : "Assets/components/right.png"
            }`}
          />
        </div>
      </div>
      {toggle && (
        <div className="sectionContainer">
          <div className="sectionIpFull">
            <div className="sectionIpHeader">
              <p>Guardian's Name</p>
            </div>
            <div className="sectionIpInput">
              <input type="text" readOnly={edit} />
            </div>
          </div>
          <div className="sectionIpFull">
            <div className="sectionIpHeader">
              <p>Guardian's Phone Number</p>
            </div>
            <div className="sectionIpInput">
              <input type="text" readOnly={edit} />
            </div>
          </div>
          <div className="sectionIpFull">
            <div className="sectionIpHeader">
              <p>Guardian's Address</p>
            </div>
            <div className="sectionIpInput">
              <input type="text" readOnly={edit} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const ParentID = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="section">
      <div className="sectionHeader" onClick={handleToggle}>
        <div className="sectionTitle">
          <p>Parent IDs</p>
        </div>
        <div className="sectionToggle">
          <img
            src={`${
              toggle
                ? "Assets/components/down.png"
                : "Assets/components/right.png"
            }`}
          />
        </div>
      </div>
    </div>
  );
};
//Pop Up To Add Collection
const DueCategory = ({ setOpenCategory, data, setForceUpdate }) => {
  const tenantId = useSelector((state) => state.tenant.selectedTenant);
  const { userId, propertyId } = useSelector((state) => state.user);

  console.log(data);
  const handleCross = () => {
    setOpenCategory(false);
  };
  const [collection, setCollection] = useState({
    userId,
    propertyId,
    tenantId,
    type: data.type,
    amount: data.finalDue,
    date: moment(new Date()).format("YYYY-MM-DD"),
    mode: "Cash",
  });
  const handlePayment = () => {
    addCollection(
      collection.userId,
      collection.propertyId,
      collection.tenantId,
      collection.type,
      collection.amount,
      collection.date,
      collection.mode
    );
    setForceUpdate(true);
    setOpenCategory(false);
  };
  const handleAmount = (e) => {
    let amt = e.target.value;
    if (amt > data.finalDue) {
      amt = data.finalDue;
    }
    setCollection({
      ...collection,
      amount: amt,
    });
  };
  const handleTime = (e) => {
    const newDate = moment(new Date(e.target.value)).format("YYYY-MM-DD");
    setCollection({
      ...collection,
      date: newDate,
    });
  };

  return (
    <div className="categoryMain">
      <div className="categoryCross">
        <img src="Assets/components/cross.png" onClick={handleCross} />
      </div>
      <div className="categoryContainer">
        <div className="categoryTitle">Record Payment</div>
        <div
          className="dueTenant"
          style={{
            width: "80%",
            marginLeft: "10%",
            position: "relative",
            top: "-20px",
          }}
        >
          <div className="ddcTop">
            <div className="ddcHead">
              <div className="ddcTitle">
                <p>{data.type}</p>
              </div>
              <div className="ddcDue">
                <p>Rs {data.finalDue}</p>
              </div>
            </div>
            <div className="ddcHead">
              <div className="ddcRoom">
                <p>Room Name</p>
              </div>
              <div className="ddcDueDate">
                <p>{data.dueDate}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="tenantAddSection">
          <p>Amount</p>
          <input
            type="text"
            value={collection.amount}
            onChange={handleAmount}
          />
        </div>
        <div className="tenantAddSection">
          <p>Date Of Payment</p>
          <input type="date" value={collection.date} onChange={handleTime} />
        </div>
        <div className="tenantAddSection">
          <p>Description</p>
          <input type="text" />
        </div>
        <div className="paymentMode">
          <p>Payment Mode</p>
          <div className="paymentHolder">
            <div
              className={`paymentUnits ${
                collection.mode == "Cash" ? "paymentActive" : ""
              }`}
              onClick={() => setCollection({ ...collection, mode: "Cash" })}
            >
              <img src="Assets/Payment/cash.png" />
              <p>Cash</p>
            </div>
            <div
              className={`paymentUnits ${
                collection.mode == "Gpay" ? "paymentActive" : ""
              }`}
              onClick={() => setCollection({ ...collection, mode: "Gpay" })}
            >
              <img src="Assets/Payment/gpay.png" />
              <p>GPay</p>
            </div>
            <div
              className={`paymentUnits ${
                collection.mode == "PhonePe" ? "paymentActive" : ""
              }`}
              onClick={() => setCollection({ ...collection, mode: "PhonePe" })}
            >
              <img src="Assets/Payment/phonepe.png" />
              <p>PhonePe</p>
            </div>
            <div
              className={`paymentUnits ${
                collection.mode == "Paytm" ? "paymentActive" : ""
              }`}
              onClick={() => setCollection({ ...collection, mode: "Paytm" })}
            >
              <img src="Assets/Payment/paytm.png" />
              <p>Paytm</p>
            </div>
          </div>
        </div>
        <button className="dueButton" onClick={handlePayment}>
          Record Payment
        </button>
      </div>
    </div>
  );
};
