import React,{useEffect,useState} from "react";
import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom'
import { getStudentNotificationsCount } from "../../../actions/Student/studentAction";


const StudentHeader = ({forceHeader,setForceHeader}) => {
  const {userId,propertyId,tenantId,name} = useSelector((state) => state.student.studentData);
  
  const [count,setCount]=useState(0)
  const history=useHistory()

  const handleClick=()=>{
    history.push("/studentNotifi")
  }
  useEffect(()=>{
    (async()=>{
      if(!forceHeader) return
      let countData= await getStudentNotificationsCount(userId,propertyId,tenantId)
      setCount(countData)
      setForceHeader(false)
    })()
  },[forceHeader])
  return (
    <div className="stuHeader">
      <div className="stuHeaderIcon">
        <img src="Assets/Students/userHeader.png" />
      </div>
      <div className="stuHeaderName">
        <p>Hello, {name}</p>
      </div>
      <div className="stuHeaderNotification">
        <img src="Assets/Students/notification.png" onClick={handleClick}/>
        {
          count > 0 && 
          <div className="studentNotificationsIcon">
          <p>{count}</p>
        </div>
        }
      </div>
    </div>
  );
};

export default StudentHeader;
