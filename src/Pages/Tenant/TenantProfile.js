import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Tenant.css";
import Header from "../../Components/Header/Header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getATenant } from "../../actions/tenantAction";
import { getTenantCollection } from "../../actions/collectionAction";
import { calculateTotalDues } from "../../duesHelper";

const TenantProfile = () => {
  const history = useHistory();
  const [navActive, setNavActive] = useState("profile");
  const { userId, propertyId } = useSelector((state) => state.user);
  const tenantId = useSelector((state) => state.tenant.selectedTenant);
  useEffect(() => {
    getATenant(userId, propertyId, tenantId);
    getTenantCollection(userId, propertyId, tenantId);
  }, []);
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
      {navActive != "profile" && <TenantPassBook />}
    </div>
  );
};

export default TenantProfile;

const TenantPassBook = () => {
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

  return (
    <div className="tenantHolder">
      <div className="passbookTop">
        <Slider {...settings}>
          <PassbookTopUnit amount={due} title={"Total Dues"} />
          <PassbookTopUnit amount={collection} title={"Total Collection"} />
          <PassbookTopUnit amount={4000} title={"Current Deposit"} />
          <PassbookTopUnit amount={4000} title={"Total Discounts"} />
        </Slider>
      </div>
      <div className="passbookBody">
        <DuesDataCard />
        <DuesDataCard />
        <DuesDataCard />
        <DuesDataCard />
        <DuesDataCard />
        <DuesDataCard />
      </div>
    </div>
  );
};

const DuesDataCard = () => {
  return (
    <div className="duesDataCard">
      <div className="ddcTop">
        <div className="ddcHead">
          <div className="ddcTitle">
            <p>Abhi</p>
          </div>
          <div className="ddcDue">
            <p>Rs 1000</p>
          </div>
        </div>
        <div className="ddcHead">
          <div className="ddcRoom">
            <p>Ground 1</p>
          </div>
          <div className="ddcDueDate">
            <p>"12/12/14</p>
          </div>
        </div>
      </div>
      <div className="ddcBottom">
        <button className="ddcRecord">Record Payment</button>
        <button className="ddcRemind">Remind To Pay</button>
      </div>
    </div>
  );
};
const PassbookTopUnit = ({ amount, title }) => {
  return (
    <div className="passTopUnit">
      <div className="passUnitTop">
        <p>Rs {amount}</p>
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
