import React,{useState} from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./HostFriend.css";
import { addStudentHosting } from "../../../actions/Student/studentAction";

const HostFriend = ({ setHost }) => {
  const {userId,propertyId,tenantId}=useSelector(state=>state.student.studentData)
  let history=useHistory()
  let tempDate=new Date()
  const [data,setData]=useState({
    name:"",
    phone:"",
    from:tempDate.getHours()+':'+ tempDate.getMinutes()+':'+ tempDate.getSeconds(),
    to:tempDate.getHours()+':'+ tempDate.getMinutes()+':'+ tempDate.getSeconds(),
    presentDate:new Date()
  })
  const handleChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const handleSubmit=()=>{
     (async()=>{
       if(await addStudentHosting(userId,propertyId,tenantId,data)){
          history.push("/student")
       }
     })()
  }
  return (
    <div className="extraUnitBg">
      <div className="extraUnitMainSection">
        <div className="extraUnitTop">
          <img src="Assets/Students/close.png" onClick={() => setHost(false)} />
          <div className="extraUnitHeader">
            <p>Host A friend </p>
          </div>
          <div className="extraUnitSub">
            <p>Specify a Time and Invite your friend over.</p>
          </div>
        </div>

        <div className="extraUnitData">
          <div className="extraUnitInput">
            <label>Friend's Name</label>
            <input type="text" name="name" value={data.name} onChange={(e)=>handleChange(e)}/>
          </div>
        </div>
        <div className="extraUnitData">
          <div className="extraUnitInput">
            <label>Phone Number</label>
            <input type="text" name="phone" value={data.phone} onChange={(e)=>handleChange(e)}/>
          </div>
        </div>
        <div className="extraUnitData">
          <div className="extraUnitInput">
            <label>From</label>
            <input type="time" name="from" value={data.from} onChange={(e)=>handleChange(e)}/>
          </div>
        </div>
        <div className="extraUnitData">
          <div className="extraUnitInput">
            <label>To</label>
            <input type="time" name="to" value={data.to} onChange={(e)=>handleChange(e)}/>
          </div>
        </div>
        <div className="extraUnitData">
          <button onClick={handleSubmit}>Host Friend</button>
        </div>
      </div>
      ;
    </div>
  );
};

export default HostFriend;
