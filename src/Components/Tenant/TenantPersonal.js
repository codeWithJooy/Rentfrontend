import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import moment from "moment/moment";
import { updateToast } from "../../actions/toastActions";
import { CodeAnalogy } from "../Toasty/Toasty";
import { addTenantDocument, getTenantDocument, updateTenant } from "../../actions/tenantAction";

const TenantPersonal = () => {
  const [edit, setEdit] = useState(true);
  let data = useSelector((state) => state.tenant.tenantDetails);
  const { userId, propertyId } = useSelector((state) => state.user);
  const tenantId = useSelector((state) => state.tenant.selectedTenant);

  const [details, setDetails] = useState(data);
  const handleEdit = () => {
    if (!edit) {
      (async () => {
        if (await updateTenant(userId, propertyId, tenantId, details)) {
        }
      })();
    }
    updateToast({
      code: CodeAnalogy.SUCCESS,
      title: "Edit Tenant Details",
    });
    setEdit(!edit);
  };
  return (
    <div className="tenantHolder">
      <Personal edit={edit} details={details} setDetails={setDetails} />
      <Kyc userId={userId} propertyId={propertyId} tenantId={tenantId} />
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
  const handleBloodChange = (e) => {
    setDetails({ ...details, bloodGroup: e.target.value });
  };
  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };
  const handleBirthChange = (e) => {
    const d = new Date(e.target.value);
    const newDate = moment(new Date(e.target.value)).format("YYYY-MM-DD");
    setDetails({ ...details, birthDate: newDate });
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
              <input type="text" readOnly value={details.name} />
            </div>
          </div>
          <div className="sectionIpFull">
            <div className="sectionIpHeader">
              <p>Room Number</p>
            </div>
            <div className="sectionIpInput">
              <select
                name="bloodGroup"
                value={details.bloodGroup}
                onChange={handleBloodChange}
              >
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
              <input
                type="text"
                readOnly={edit}
                value={details.alternate}
                name="alternate"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="sectionIpFull">
            <div className="sectionIpHeader">
              <p>Email</p>
            </div>
            <div className="sectionIpInput">
              <input
                type="text"
                readOnly={edit}
                value={details.email}
                name="email"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="sectionIpFull">
            <div className="sectionIpHeader">
              <p>Date Of Birth</p>
            </div>
            <div className="sectionIpInput">
              <input
                type="date"
                name="birthDate"
                value={moment().format("YYYY-MM-DD")}
                readOnly={edit}
                onChange={handleBirthChange}
              />
            </div>
          </div>
          <div className="sectionIpFull">
            <div className="sectionIpHeader">
              <p>Blood Group</p>
            </div>
            <div className="sectionIpInput">
              <select
                name="bloodGroup"
                value={details.bloodGroup}
                onChange={handleBloodChange}
              >
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
const Kyc = ({ userId, propertyId, tenantId }) => {
  const [toggle, setToggle] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedABImage, setSelectedABImage] = useState(null);
  const [selectedPFImage, setSelectedPFImage] = useState(null);
  const [selectedPBImage, setSelectedPBImage] = useState(null);

  const aadharFront = useRef();
  const aadharBack = useRef();
  const panFront = useRef();
  const panBack = useRef();

  const handleToggle = () => {
    setToggle(!toggle);
  };
  const handleaadharFrontClick = () => {
    aadharFront.current.click();
  };
  const handleaadharBackClick = () => {
    aadharBack.current.click();
  };
  const handlepanFrontClick = () => {
    panFront.current.click();
  };
  const handlepanBackClick = () => {
    panBack.current.click();
  };

  const handleaadharFront = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();

    formData.append("file", file);
    formData.append("userId", userId);
    formData.append("propertyId", propertyId);
    formData.append("tenantId", tenantId);
    formData.append("docType", "AF");

    try {
      (async()=>{
        let data = await addTenantDocument(formData);
        console.log(data)
        setSelectedImage(data);
      })()
      
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };
  const handleaadharBack = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();

    formData.append("file", file);
    formData.append("userId", userId);
    formData.append("propertyId", propertyId);
    formData.append("tenantId", tenantId);
    formData.append("docType", "AB");

    try {
      (async()=>{
        let data = await addTenantDocument(formData);
        setSelectedABImage(data);
      })()
      
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };
  const handlepanFront = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();

    formData.append("file", file);
    formData.append("userId", userId);
    formData.append("propertyId", propertyId);
    formData.append("tenantId", tenantId);
    formData.append("docType", "PF");

    try {
      (async()=>{
        let data = await addTenantDocument(formData);
        setSelectedPFImage(data);
      })()
      
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };
  const handlepanBack = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();

    formData.append("file", file);
    formData.append("userId", userId);
    formData.append("propertyId", propertyId);
    formData.append("tenantId", tenantId);
    formData.append("docType", "PB");

    try {
      (async()=>{
        let data = await addTenantDocument(formData);
        setSelectedPBImage(data);
      })()
      
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };
  useEffect(()=>{
     (async()=>{
      let aadharFront=await getTenantDocument(userId,propertyId,tenantId,"AF")
      let aadharBack=await getTenantDocument(userId,propertyId,tenantId,"AB")
      let panFront=await getTenantDocument(userId,propertyId,tenantId,"PF")
      let panBack=await getTenantDocument(userId,propertyId,tenantId,"PB")
      setSelectedImage(aadharFront)
      setSelectedABImage(aadharBack)
      setSelectedPFImage(panFront)
      setSelectedPBImage(panBack)
     })()
  },[])
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
      {toggle && (
        <div className="documentContainer">
          {/* Govererment Id Front */}
          <div className="documentHolder">
            {!selectedImage && (
              <div className="documentImage">
                <img src="Assets/Tenant/document.png" />
              </div>
            )}
            {selectedImage && (
              <div className="documentImageUploaded">
                <img src={selectedImage} />
              </div>
            )}

            <div className="documentName">
              <div className="documentTitle">
                <p>Aadhar Card</p>
              </div>
              <div className="documentDes">
                <p>Front</p>
              </div>
              <div className="documentButton">
                <input
                  type="file"
                  ref={aadharFront}
                  onChange={handleaadharFront}
                  accept=".jpg,.png,.jpeg"
                  style={{ display: "none" }}
                />
                <button onClick={handleaadharFrontClick}>Upload</button>
              </div>
            </div>
          </div>
          {/* Govererment Id Front */}
          <div className="documentHolder">
            <div className="documentImage">
              {!selectedABImage && (
                <div className="documentImage">
                  <img src="Assets/Tenant/document.png" />
                </div>
              )}
              {selectedABImage && (
                <div className="documentImageUploaded">
                  <img src={selectedABImage} />
                </div>
              )}
            </div>
            <div className="documentName">
              <div className="documentTitle">
                <p>Aadhar Card</p>
              </div>
              <div className="documentDes">
                <p>Back</p>
              </div>
              <div className="documentButton">
                <input
                  type="file"
                  ref={aadharBack}
                  onChange={handleaadharBack}
                  accept=".jpg,.png,.jpeg"
                  style={{ display: "none" }}
                />
                <button onClick={handleaadharBackClick}>Upload</button>
              </div>
            </div>
          </div>
          {/* Govererment Id Front */}
          <div className="documentHolder">
            <div className="documentImage">
              {!selectedPFImage && (
                <div className="documentImage">
                  <img src="Assets/Tenant/document.png" />
                </div>
              )}
              {selectedPFImage && (
                <div className="documentImageUploaded">
                  <img src={selectedPFImage} />
                </div>
              )}
            </div>
            <div className="documentName">
              <div className="documentTitle">
                <p>Pan Card</p>
              </div>
              <div className="documentDes">
                <p>Front</p>
              </div>
              <div className="documentButton">
                <input
                  type="file"
                  ref={panFront}
                  onChange={handlepanFront}
                  accept=".jpg,.png,.jpeg"
                  style={{ display: "none" }}
                />
                <button onClick={handlepanFrontClick}>Upload</button>
              </div>
            </div>
          </div>
          {/* Govererment Id Front */}
          <div className="documentHolder">
            <div className="documentImage">
              {!selectedPBImage && (
                <div className="documentImage">
                  <img src="Assets/Tenant/document.png" />
                </div>
              )}
              {selectedPBImage && (
                <div className="documentImageUploaded">
                  <img src={selectedPBImage} />
                </div>
              )}
            </div>
            <div className="documentName">
              <div className="documentTitle">
                <p>Pan Card</p>
              </div>
              <div className="documentDes">
                <p>Back</p>
              </div>
              <div className="documentButton">
                <input
                  type="file"
                  ref={panBack}
                  onChange={handlepanBack}
                  accept=".jpg,.png,.jpeg"
                  style={{ display: "none" }}
                />
                <button onClick={handlepanBackClick}>Upload</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
const Parent = ({ edit, details, setDetails }) => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
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
              <input
                type="text"
                readOnly={edit}
                name="fatherName"
                value={details.fatherName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="sectionIpFull">
            <div className="sectionIpHeader">
              <p>Father's Phone Number</p>
            </div>
            <div className="sectionIpInput">
              <input
                type="text"
                readOnly={edit}
                name="fatherNumber"
                value={details.fatherNumber}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="sectionIpFull">
            <div className="sectionIpHeader">
              <p>Mother's Name</p>
            </div>
            <div className="sectionIpInput">
              <input
                type="text"
                readOnly={edit}
                name="motherName"
                value={details.motherName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="sectionIpFull">
            <div className="sectionIpHeader">
              <p>Mother's Phone Number</p>
            </div>
            <div className="sectionIpInput">
              <input
                type="text"
                readOnly={edit}
                name="motherNumber"
                value={details.motherNumber}
                onChange={handleChange}
              />
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
const Guardian = ({ edit, details, setDetails }) => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
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
              <input
                type="text"
                readOnly={edit}
                value={details.guardianName}
                name="guardianName"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="sectionIpFull">
            <div className="sectionIpHeader">
              <p>Guardian's Phone Number</p>
            </div>
            <div className="sectionIpInput">
              <input
                type="text"
                readOnly={edit}
                name="guardianNumber"
                value={details.guardianNumber}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="sectionIpFull">
            <div className="sectionIpHeader">
              <p>Guardian's Address</p>
            </div>
            <div className="sectionIpInput">
              <input
                type="text"
                readOnly={edit}
                name="guardianAddress"
                value={details.guardianAddress}
                onChange={handleChange}
              />
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
