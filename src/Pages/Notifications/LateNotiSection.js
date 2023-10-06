import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { addCollection, getReceiptId, getTempCollection } from '../../actions/collectionAction';
import moment from "moment";
import { getLate} from '../../actions/Student/studentAction';
import {updateStudentLate} from "../../actions/Student/studentAction"


const LateNotiSection = () => {
    const { userId, propertyId } = useSelector(state => state.user)
    const [forceUpdate, setForceUpdate] = useState(true)
    const [tempData, setTempData] = useState([])
    useEffect(() => {
        (async () => {
            let data = await getLate(userId,propertyId)
            setTempData(data)
            setForceUpdate(false)
        })()
    }, [forceUpdate])
    return (
        <div className='paymentNotiSection'>
            {
                tempData && tempData.length > 0 &&
                tempData.map((data, key) => (
                    <LateNotiCard 
                        name={data.name}
                        room={data.room}
                        reason={data.reason}
                        time={data.time}
                        lateId={data.lateIdId}
                        userId={data.userId}
                        propertyId={data.propertyId}
                        tenantId={data.tenantId}
                        setForceUpdate={setForceUpdate}
                        key={key} />
                ))
            }
        </div>
    )
}

export default LateNotiSection;

const LateNotiCard = ({ name, room, reason, time, hostingId,userId,propertyId,tenantId, setForceUpdate }) => {
    let data={
        reason,
        time,
        presentDate:moment(new Date()).format("YYYY-MM-DD")
    }
    const handleAccept = () => {
        (async () => {
            if (
                await updateStudentLate(
                    userId,
                    propertyId,
                    tenantId,
                    hostingId,
                    "Accepted",
                    data
                )
            ) {
                setForceUpdate(true)
            }
        })()
    }
    const handleDelete = () => {
        (async () => {
            if (
                await updateStudentLate(
                    userId,
                    propertyId,
                    tenantId,
                    hostingId,
                    "Rejected",
                    data
                )
            ) {
                setForceUpdate(true)
            }
        })()
    }
    return (
        <div className='paymentNotiCard'>
            <div className='paymentDetails'>
                <div className='payType'>
                    <p>{name}</p>
                </div>
                <div className='payAmount'>
                    <p>{room}</p>
                </div>
            </div>
            <div className='payeeDetails'>
                <div className='lateReason'>
                    <p>{reason}</p>
                </div>
            
            </div>
            <div className='paymentMeta'>
                <div className='lateReason'>
                    <p>Return By:{time}</p>
                </div>
            </div>
            <div className='paymentButtons'>
                <div className='paymentButtonHolder'>
                    <button className='accept' onClick={handleAccept}>Accept</button>
                </div>
                <div classname="paymentButtonHolder">
                    <button className='decline' onClick={handleDelete}>Decline</button>
                </div>
            </div>

        </div>
    )
}