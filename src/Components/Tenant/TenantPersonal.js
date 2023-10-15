import React, { useState,useRef  } from "react";
import { useSelector } from "react-redux";
import moment from "moment/moment";
import { updateToast } from "../../actions/toastActions";
import { CodeAnalogy } from "../Toasty/Toasty";
import { updateTenant } from "../../actions/tenantAction";

const TenantPersonal = () => {
  const [edit, setEdit] = useState(true);
  let data = useSelector(state => state.tenant.tenantDetails)
  const { userId, propertyId } = useSelector((state) => state.user);
  const tenantId=useSelector((state)=>state.tenant.selectedTenant)

  const [details, setDetails] = useState(data)
 const handleEdit=()=>{
  if(!edit){
    (async()=>{
      if(await updateTenant(userId,propertyId,tenantId,details)){

      }
    })()
  }
  updateToast({
    code:CodeAnalogy.SUCCESS,
    title:"Edit Tenant Details"
  })
  setEdit(!edit)
 }
  return (
    <div className="tenantHolder">
      <Personal edit={edit} details={details} setDetails={setDetails} />
      <Kyc />
      <Parent edit={edit} details={details} setDetails={setDetails} />
      <Guardian edit={edit} details={details} setDetails={setDetails} />
      <ParentID />
      <div className="memEdit" onClick={handleEdit}>
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
  const handleBloodChange=(e)=>{
    setDetails({...details,bloodGroup:e.target.value})
  }
  const handleChange=(e)=>{
    setDetails({...details,[e.target.name]:e.target.value})
  }
  const handleBirthChange=(e)=>{
    const d = new Date(e.target.value);
    const newDate = moment(new Date(e.target.value)).format("YYYY-MM-DD");
    setDetails({...details,'birthDate':newDate})
  }
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
              <input type="text" readOnly={edit} value={details.alternate} name="alternate" onChange={handleChange}/>
            </div>
          </div>
          <div className="sectionIpFull">
            <div className="sectionIpHeader">
              <p>Email</p>
            </div>
            <div className="sectionIpInput">
              <input type="text" readOnly={edit} value={details.email} name="email" onChange={handleChange}/>
            </div>
          </div>
          <div className="sectionIpFull">
            <div className="sectionIpHeader">
              <p>Date Of Birth</p>
            </div>
            <div className="sectionIpInput">
              <input type="date" name="birthDate" value={moment().format("YYYY-MM-DD")} readOnly={edit} onChange={handleBirthChange }/>
            </div>
          </div>
          <div className="sectionIpFull">
            <div className="sectionIpHeader">
              <p>Blood Group</p>
            </div>
            <div className="sectionIpInput">
              <select name="bloodGroup" value={details.bloodGroup} onChange={handleBloodChange}>
                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>B-</option>
                <option>O+</option>
                <option>O-</option>
                <option>AB+</option>
                <option>AB-</option>
              </select>
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

const Parent = ({ edit, details, setDetails }) => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const handleChange=(e)=>{
    setDetails({...details,[e.target.name]:e.target.value})
  }
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
              <input type="text" readOnly={edit} name="fatherName" value={details.fatherName} onChange={handleChange}/>
            </div>
          </div>
          <div className="sectionIpFull">
            <div className="sectionIpHeader">
              <p>Father's Phone Number</p>
            </div>
            <div className="sectionIpInput">
              <input type="text" readOnly={edit} name="fatherNumber" value={details.fatherNumber} onChange={handleChange}/>
            </div>
          </div>
          <div className="sectionIpFull">
            <div className="sectionIpHeader">
              <p>Mother's Name</p>
            </div>
            <div className="sectionIpInput">
              <input type="text" readOnly={edit} name="motherName" value={details.motherName} onChange={handleChange}/>
            </div>
          </div>
          <div className="sectionIpFull">
            <div className="sectionIpHeader">
              <p>Mother's Phone Number</p>
            </div>
            <div className="sectionIpInput">
              <input type="text" readOnly={edit} name="motherNumber" value={details.motherNumber} onChange={handleChange}/>
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
