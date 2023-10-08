import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Login.css";
import { updatePassword, userLogin } from "../../actions/userAction";

const UpdatePass = () => {

  const email=useSelector((state)=>state.user.addEmail)
  const [data, setData] = useState({
    password:"",
    confirm:"",
  });
  const history = useHistory();
  const handleChange = (e) => {
    setData({...data,[e.target.name]:e.target.value})
  };
 const handleUpdate=()=>{
   (async()=>{
     if(await updatePassword(email,data.password,data.confirm)){
       history.push("/login")
     }
   })()
 }
  return (
    <div className="mainEntry">
      <div className="mainEntryContainer">
        <div className="entryTop">
          <div className="entryTitle">{"Update Password"}</div>
        </div>
        <div className="entryData">
          <div className="entryDataUnit">
            <input
              type="text"
              placeholder="New Password"
              name="password"
              value={data.password}
              onChange={handleChange}
            />
          </div>
          <div className="entryDataUnit">
            <input
              type="text"
              placeholder="Confirm Password"
              name="confirm"
              value={data.confirm}
              onChange={handleChange}
            />
          </div>
          <div className="entryDataButton">
            <button onClick={handleUpdate}>Update Password</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePass;
