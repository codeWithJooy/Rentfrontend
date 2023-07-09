import React, { useState } from "react";
import "./Property.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import PropertyInit from "./PropertyInit";

const Property = () => {
  return (
    <div className="propertyHome">
      <Header />
      <PropertyInit />
      <Footer page={"Property"} />
    </div>
  );
};

export default Property;
