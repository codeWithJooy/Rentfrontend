import React, { useState } from "react";

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
export default TenantPersonal;

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
