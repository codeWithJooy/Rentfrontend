import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./Contacts.css";
import { addContactType, getContactType } from "../../actions/contactsAction";

const ContactTypes = () => {
  const user = useSelector((state) => state.user);
  const [model, setModel] = useState(false);
  const [contactTypeData, setContactTypeData] = useState([]);
  const [forceUpdate, setForceUpdate] = useState(true);
  const openModel = () => {
    setModel(true);
  };
  useEffect(() => {
    if (forceUpdate) {
      (async () => {
        let val = await getContactType(user.userId,user.propertyId);
        setContactTypeData(val)
        setForceUpdate(false)
      })();
    }
  }, [forceUpdate]);
  return (
    <div className="contactSection">
      <div className="contactAddPlus">
        <img src="Assets/Tenant/plus.png" alt="Add" onClick={openModel} />
      </div>
      <div className="contactSectionContainer">
        {
            contactTypeData && contactTypeData.length >0 &&
            contactTypeData.map((val,key)=>(
              <ContactTypeCard type={val.contactType} />
            ))
        }
      </div>
      {model && <ContactTypeModal setModel={setModel} setForceUpdate={setForceUpdate}/>}
    </div>
  );
};

export default ContactTypes;

const ContactTypeCard = ({type}) => {
  return (
    <div className="contactTypeCard">
      <p>{type}</p>
    </div>
  );
};

const ContactTypeModal = ({ setModel,setForceUpdate }) => {
  const user = useSelector((state) => state.user);
  const [contactType, setContactType] = useState({
    userId: user.userId,
    propertyId: user.propertyId,
    contactType: "",
  });

  const handleChange = (e) => {
    setContactType({ ...contactType, [e.target.name]: e.target.value });
  };

  const handleTypeAdd = () => {
    (async () => {
      await addContactType(contactType);
      setForceUpdate(true)
      setModel(false);
    })();
  };
  return (
    <div className="modelBg">
      <img
        src="Assets/components/cross.png"
        className="contactClose"
        alt="CloseIcon"
        onClick={() => setModel(false)}
      />
      <div className="contactTypeHolder">
        <div className="typeName">
          <p>Contact Type</p>
        </div>
        <div className="typeInput">
          <input
            type="text"
            placeholder="Add Contact Type"
            name="contactType"
            onChange={handleChange}
          />
        </div>
        <div className="typeButton">
          <button onClick={handleTypeAdd}>Add Type</button>
        </div>
      </div>
    </div>
  );
};
