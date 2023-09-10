import React from 'react'
import StudentHeader from '../../Components/Header/StudentHeader/StudentHeader'
import StudentFooter from '../../Components/Footer/StudentFooter/StudentFooter'
import NotifiHeader from '../../Components/Header/StudentHeader/NotifiHeader'
import { beautiDate } from '../../helper'

const StudentNotifi=()=>{
    return(
        <div className='studentMain'>
            <NotifiHeader />
            <div className="stuContainer">
               <NotificationUnit />
            </div>
            <StudentFooter />
        </div>
    )
}

export default StudentNotifi;

const NotificationUnit=()=>{
    return(
        <div className="noticationUnit">
           <div className="notiHeader">
             <div className='notiName'>
               <p>Late Arrival</p>
             </div>
             <div className='notiStatus'>
                <p>Pending</p>
             </div>
           </div>
           <div className='notiMessage'>
             <p>Request for late arrival due to Going Home by  13:40 is pending</p>
           </div>
           <div className='notiDate'>
            <p>{beautiDate("2023-11-10")}</p>
           </div>
        </div>
    )
}