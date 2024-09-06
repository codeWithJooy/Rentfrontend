import React, { useState, useEffect } from "react";
import Header from "../../Components/Header/Header";
import { useSelector } from "react-redux";
import "./Contacts.css";
import {
  addContacts,
  getContacts,
  getContactType,
} from "../../actions/contactsAction";
import Empty from "./Empty";

const ContactSection = () => {
  const user = useSelector((state) => state.user);
  const [model, setModel] = useState(false);
  const [contactData, setContactData] = useState([]);
  const [forceUpdate, setForceUpdate] = useState(true);
  const openModel = () => {
    setModel(true);
  };

  useEffect(() => {
    if (forceUpdate) {
      (async () => {
        let contactsData = await getContacts(user.userId, user.propertyId);
        setContactData(contactsData);
        setForceUpdate(false);
      })();
    }
  }, [forceUpdate]);
  return (
    <div className="contactSection">
      <div className="contactAddPlus">
        <img src="Assets/Tenant/plus.png" onClick={openModel} />
      </div>
      <div className="contactSectionContainer">
        {contactData &&
          contactData.length > 0 &&
          contactData.map((val, key) => (
            <ContactCard
              name={val.contactName}
              type={val.contactType}
              number={val.contactNumber}
            />
          ))}
          {
            contactData && contactData.length <=0 && 
            <Empty text={"Contacts Not Added"} />
          }
      </div>
      {model && (
        <ContactAddModal setModel={setModel} setForceUpdate={setForceUpdate} />
      )}
    </div>
  );
};

export default ContactSection;

const ContactCard = ({ name, type, number }) => {
  return (
    <div className="contactCard">
      <div className="contactName">
        <p>{name}</p>
      </div>
      <div className="contactType">
        <p>{type}</p>
      </div>
      <div className="contactNumber">
        <p>{number}</p>
      </div>
    </div>
  );
};
const ContactAddModal = ({ setModel, setForceUpdate }) => {
  const user = useSelector((state) => state.user);
  const [contactType, setContactType] = useState([]);
  const [contact, setContact] = useState({
    userId: user.userId,
    propertyId: user.propertyId,
    contactType: "",
    contactName: "",
    contactNumber: "",
  });
  const handleClose = () => {
    setForceUpdate(true);
    setModel(false);
   
  };
  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  const handleContactAdd = () => {
    (async () => {
      await addContacts(contact);
      setModel(false);
      setForceUpdate(true);
    })();
  };
  useEffect(() => {
    (async () => {
      let contactTypes = await getContactType(user.userId, user.propertyId);
      setContactType(contactTypes);
    })();
  }, []);
  return (
    <div className="modelBg">
      <img
        src="Assets/components/cross.png"
        className="contactClose"
        alt="closeIcon"
        onClick={handleClose}
      />
      <div className="contactTypeHolder">
        <div className="typeName">
          <p>Add Contact</p>
        </div>
        <div className="contactType">
          <select name="contactType" onChange={handleChange}>
            <option value="" disabled selected>
              Select a Contact Type
            </option>
            {contactType &&
              contactType.length > 0 &&
              contactType.map((val, key) => <option>{val.contactType}</option>)}
          </select>
        </div>
        <div className="typeInput">
          <input
            type="text"
            placeholder="Name of Contact"
            name="contactName"
            onChange={handleChange}
          />
        </div>
        <div className="typeInput">
          <input
            type="number"
            name="contactNumber"
            placeholder="Number of Contact"
            onChange={handleChange}
          />
        </div>
        <div className="typeButton">
          <button onClick={handleContactAdd}>Add Contact</button>
        </div>
      </div>
    </div>
  );
};
