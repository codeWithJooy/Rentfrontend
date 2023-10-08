import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Login.css";
import { userLogin, verifyOtp } from "../../actions/userAction";

const OtpPage = () => {
  const email=useSelector((state)=>state.user.addEmail)
  const [otp, setOtp] = useState("");
  const history = useHistory();
  const handleChange = (e) => {
    setOtp(e.target.value)
  };
 const handleOtp=()=>{
   (async()=>{
     if(await verifyOtp(email,otp)){
      history.push("/updatePass")
     }
   })()
 }
  return (
    <div className="mainEntry">
      <div className="mainEntryContainer">
        <div className="entryTop">
          <div className="entryTitle">{"Hello Lost Soul"}</div>
          <div className="entryDescription">{"Please Entry the Otp Send to your Registered Pnone Number"}</div>
        </div>
        <div className="entryData">
          <div className="entryDataUnit">
            <input
              type="text"
              placeholder="6-digit Otp"
              name="otp"
              value={otp}
              onChange={handleChange}
            />
          </div>
          
          <div className="entryDataButton">
            <button onClick={handleOtp}>Add Otp</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpPage;
