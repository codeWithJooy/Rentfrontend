import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import StudentHeader from '../../Components/Header/StudentHeader/StudentHeader'
import StudentFooter from '../../Components/Footer/StudentFooter/StudentFooter'
import NotifiHeader from '../../Components/Header/StudentHeader/NotifiHeader'
import { beautiDate } from '../../helper'
import { getStudentNotifications, updateStudentNotifications } from '../../actions/Student/studentAction'
import { HttpStatusCode } from 'axios'

const StudentNotifi=()=>{
  const {userId,propertyId,tenantId} = useSelector((state) => state.student.studentData);
  let [notifications,setNotifications]=useState([])
  let [forceUpdate,setForceUpdate]=useState(true)
  useEffect(()=>{
     (async()=>{
         if(!forceUpdate) return
         let data=await getStudentNotifications(userId,propertyId,tenantId)
         setNotifications(data)
         await updateStudentNotifications(userId,propertyId,tenantId)
         setForceUpdate(false)
     })()
  },[forceUpdate])
  if(!forceUpdate){
    return(
      <div className='studentMain'>
          <NotifiHeader />
          <div className="stuContainer">
             {
              notifications && notifications.length > 0 &&
              notifications.map((data,key)=>(
                <NotificationUnit type={data.type}
                                  status={data.status}
                                  message={data.message}
                                  date={data.date}
              />
              ))
             }
          </div>
          <StudentFooter />
      </div>
  )
  }
  else{
    return <></>
  }
}

export default StudentNotifi;

const NotificationUnit=({type,status,message,date})=>{
    return(
        <div className="noticationUnit">
           <div className="notiHeader">
             <div className='notiName'>
               <p>{type}</p>
             </div>
             <div className='notiStatus'>
                <p>{status}</p>
             </div>
           </div>
           <div className='notiMessage'>
             <p>{message}</p>
           </div>
           <div className='notiDate'>
            <p>{beautiDate(date)}</p>
           </div>
        </div>
    )
}