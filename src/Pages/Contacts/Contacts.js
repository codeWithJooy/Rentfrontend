import React, { useState, useEffect } from "react";
import Header from "../../Components/Header/Header";
import ContactSection from "./ContactSection";
import ContactTypes from "./ContactsTypes";
import "./Contacts.css";

const Contacts = () => {
  const [selected, setSelected] = useState("contacts");
  const handleSelected = (val) => {
    setSelected(val);
  };
  return (
    <div className="contactsMain">
      <Header name={"Contacts"} link={"/home"} type={"back"} />
      <div className="contactsNav">
        <div
          className={`${
            selected === "contacts" ? "navContactSelected" : "navContactUnit"
          }`}
          onClick={() => handleSelected("contacts")}
        >
          <p>My Contacts</p>
        </div>
        <div
          className={`${
            selected === "type" ? "navContactSelected" : "navContactUnit"
          }`}
          onClick={() => handleSelected("type")}
        >
          <p>Contact Types</p>
        </div>
        {selected === "contacts" && <ContactSection />}
        {selected === "type" && <ContactTypes />}
      </div>
    </div>
  );
};

export default Contacts;



