import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Member.css";
import MemberAcces from "./MemberAccess";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const MemberProfile = () => {
  const history = useHistory();
  const [navActive, setNavActive] = useState("personal");
  return (
    <div className="memberMain">
      <Header name={"Members Profile"} link={"/member"} type={"back"} />
      <div className="memNav">
        <div
          className={`memNavUnit ${
            navActive == "personal" ? "memNavActive" : ""
          }`}
          onClick={() => setNavActive("personal")}
        >
          <p>Personal Details</p>
        </div>
        <div
          className={`memNavUnit ${
            navActive == "property" ? "memNavActive" : ""
          }`}
          onClick={() => setNavActive("property")}
        >
          <p>Property Access</p>
        </div>
      </div>
      
      {
        navActive=="personal" && <MemberPersonal />
      }
      {
        navActive=="property" && <MemberAcces />
      }
    </div>
  );
};

export default MemberProfile;

const MemberPersonal = () => {
  const [edit, setEdit] = useState(true);
  return (
    <div className="memContainer">
      <Personal edit={edit} />
      <Kyc />
      <Current edit={edit} />
      <Permanent edit={edit} />
      <Job />
      <Bank edit={edit} />
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
            <div className="sectionIpHalf">
              <div className="sectionIpHeader">
                <p>Designation</p>
              </div>
              <div className="sectionIpInput">
                <input type="text" readOnly={edit} />
              </div>
            </div>
            <div className="sectionIpHalf">
              <div className="sectionIpHeader">
                <p>Salary</p>
              </div>
              <div className="sectionIpInput">
                <input type="text" readOnly={edit} />
              </div>
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
          <p>Kyc Documents</p>
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

const Current = ({ edit }) => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="section">
      <div className="sectionHeader" onClick={handleToggle}>
        <div className="sectionTitle">
          <p>Current Address Details</p>
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
              <p>Current Address</p>
            </div>
            <div className="sectionIpInput">
              <input type="text" readOnly={edit} />
            </div>
          </div>
          <div className="sectionIpFull">
            <div className="sectionIpHalf">
              <div className="sectionIpHeader">
                <p>Pincode</p>
              </div>
              <div className="sectionIpInput">
                <input type="text" readOnly={edit} />
              </div>
            </div>
            <div className="sectionIpHalf">
              <div className="sectionIpHeader">
                <p>City</p>
              </div>
              <div className="sectionIpInput">
                <input type="text" readOnly={edit} />
              </div>
            </div>
          </div>
          <div className="sectionIpFull">
            <div className="sectionIpHeader">
              <p>State</p>
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

const Permanent = ({ edit }) => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="section">
      <div className="sectionHeader" onClick={handleToggle}>
        <div className="sectionTitle">
          <p>Permanent Address Details</p>
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
              <p>Permanent Address</p>
            </div>
            <div className="sectionIpInput">
              <input type="text" readOnly={edit} />
            </div>
          </div>
          <div className="sectionIpFull">
            <div className="sectionIpHalf">
              <div className="sectionIpHeader">
                <p>Pincode</p>
              </div>
              <div className="sectionIpInput">
                <input type="text" readOnly={edit} />
              </div>
            </div>
            <div className="sectionIpHalf">
              <div className="sectionIpHeader">
                <p>City</p>
              </div>
              <div className="sectionIpInput">
                <input type="text" readOnly={edit} />
              </div>
            </div>
          </div>
          <div className="sectionIpFull">
            <div className="sectionIpHeader">
              <p>State</p>
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

const Job = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="section">
      <div className="sectionHeader" onClick={handleToggle}>
        <div className="sectionTitle">
          <p>Job Details</p>
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

const Bank = ({ edit }) => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="section">
      <div className="sectionHeader" onClick={handleToggle}>
        <div className="sectionTitle">
          <p>Bank Details</p>
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
              <p>Bank A/c No</p>
            </div>
            <div className="sectionIpInput">
              <input type="text" readOnly={edit} />
            </div>
          </div>
          <div className="sectionIpFull">
            <div className="sectionIpHalf">
              <div className="sectionIpHeader">
                <p>Bank Name</p>
              </div>
              <div className="sectionIpInput">
                <input type="text" readOnly={edit} />
              </div>
            </div>
            <div className="sectionIpHalf">
              <div className="sectionIpHeader">
                <p>IFSC Code</p>
              </div>
              <div className="sectionIpInput">
                <input type="text" readOnly={edit} />
              </div>
            </div>
          </div>
          <div className="sectionIpFull">
            <div className="sectionIpHeader">
              <p>Account Holder Name</p>
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
