import React, { useState } from "react";
import "./Property.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import PropertyInit from "./PropertyInit";
import Toast from "../../Components/Toast/Toast";

const Property = () => {
  const [toast, setToast] = useState(false);
  return (
    <div className="propertyHome">
      <Header />
      <PropertyInit setToast={setToast} />
      <Footer page={"Property"} />
      <Toast
        toast={toast}
        setToast={setToast}
        title={"Floors Added"}
        msg={"Floors Added Successfully."}
      />
    </div>
  );
};

export default Property;
