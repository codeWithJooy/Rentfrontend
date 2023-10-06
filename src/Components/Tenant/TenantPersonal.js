import React, { useState,useRef  } from "react";
import { useSelector } from "react-redux";
const TenantPersonal = () => {
  const [edit, setEdit] = useState(true);
  let data = useSelector(state => state.tenant.tenantDetails)
  const [details, setDetails] = useState(data)

  return (
    <div className="tenantHolder">
      <Personal edit={edit} details={details} setDetails={setDetails} />
      <Kyc />
      <Parent edit={edit} details={details} setDetails={setDetails} />
      <Guardian edit={edit} details={details} setDetails={setDetails} />
      <ParentID />
      <div className="memEdit" onClick={() => setEdit(!edit)}>
        {edit ? "Edit" : "Save"}
      </div>
    </div>
  );
};
export default TenantPersonal;

const Personal = ({ edit, details, setDetails }) => {
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
            src={`${toggle
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
              <input type="text" readOnly value={details.name} />
            </div>
          </div>
          <div className="sectionIpFull">
            <div className="sectionIpHeader">
              <p>Phone Number</p>
            </div>
            <div className="sectionIpInput">
              <input type="text" readOnly value={details.number} />
            </div>
          </div>
          <div className="sectionIpFull">
            <div className="sectionIpHeader">
              <p>Alternate Number</p>
            </div>
            <div className="sectionIpInput">
              <input type="text" readOnly={edit} value={details.alternate} />
            </div>
          </div>
          <div className="sectionIpFull">
            <div className="sectionIpHeader">
              <p>Email</p>
            </div>
            <div className="sectionIpInput">
              <input type="text" readOnly={edit} value={details.email} />
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
              <input type="text" readOnly={edit} value={details.bloodGroup} />
            </div>
          </div>
          <div className="sectionIpFull">
            <div className="sectionIpHeader">
              <p>Date Of Booking</p>
            </div>
            <div className="sectionIpInput">
              <input type="text" readOnly value={details.dob} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Kyc = () => {
  const [toggle, setToggle] = useState(true);
  const govFront=useRef()
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const handleGovFrontClick=()=>{
    govFront.current.click()
  }
  const handleGovFront=(e)=>{
    console.log(e);
  }
  return (
    <div className="section">
      <div className="sectionHeader" onClick={handleToggle}>
        <div className="sectionTitle">
          <p>Documents</p>
        </div>
        <div className="sectionToggle">
          <img
            src={`${toggle
              ? "Assets/components/down.png"
              : "Assets/components/right.png"
              }`}
          />
        </div>
      </div>
      {
        toggle && 
        <div className="documentContainer">
        {/* Govererment Id Front */}
        <div className="documentHolder">
          <div className="documentImage">
            <img src="Assets/Tenant/document.png" />
          </div>
          <div className="documentName">
            <div className="documentTitle">
              <p>Govt. ID</p>
            </div>
            <div className="documentDes">
              <p>Front</p>
            </div>
            <div className="documentButton">
              <input type="file" ref={govFront} onChange={handleGovFront} accept=".pdf" style={{display:"none"}} />
              <button onClick={handleGovFrontClick}>Upload</button>
            </div>
          </div>
        </div>
                {/* Govererment Id Front */}
                <div className="documentHolder">
          <div className="documentImage">
            <img src="Assets/Tenant/document.png" />
          </div>
          <div className="documentName">
            <div className="documentTitle">
              <p>Govt. ID</p>
            </div>
            <div className="documentDes">
              <p>Front</p>
            </div>
            <div className="documentButton">
              <button>Upload</button>
            </div>
          </div>
        </div>
                {/* Govererment Id Front */}
                <div className="documentHolder">
          <div className="documentImage">
            <img src="Assets/Tenant/document.png" />
          </div>
          <div className="documentName">
            <div className="documentTitle">
              <p>Govt. ID</p>
            </div>
            <div className="documentDes">
              <p>Front</p>
            </div>
            <div className="documentButton">
              <button>Upload</button>
            </div>
          </div>
        </div>
                {/* Govererment Id Front */}
                <div className="documentHolder">
          <div className="documentImage">
            <img src="Assets/Tenant/document.png" />
          </div>
          <div className="documentName">
            <div className="documentTitle">
              <p>Govt. ID</p>
            </div>
            <div className="documentDes">
              <p>Front</p>
            </div>
            <div className="documentButton">
              <button>Upload</button>
            </div>
          </div>
        </div>
      </div>
      }
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
            src={`${toggle
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
            src={`${toggle
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
            src={`${toggle
              ? "Assets/components/down.png"
              : "Assets/components/right.png"
              }`}
          />
        </div>
      </div>
    </div>
  );
};
