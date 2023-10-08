import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { addCollection, getReceiptId, getTempCollection } from '../../actions/collectionAction';
import moment from "moment";
import { getHosting } from '../../actions/Student/studentAction';
import {updateStudentHosting} from "../../actions/Student/studentAction"
import NotPresent from './NotPresent';


const HostingNotiSection = () => {
    const { userId, propertyId } = useSelector(state => state.user)
    const [forceUpdate, setForceUpdate] = useState(true)
    const [tempData, setTempData] = useState([])
    useEffect(() => {
        (async () => {
            let data = await getHosting(userId,propertyId)
            setTempData(data)
            setForceUpdate(false)
        })()
    }, [forceUpdate])
    return (
        <div className='paymentNotiSection'>
            {
                tempData && tempData.length > 0 &&
                tempData.map((data, key) => (
                    <HostNotiCard 
                        name={data.name}
                        room={data.room}
                        friend={data.friend}
                        phone={data.phone}
                        from={data.from}
                        to={data.to}
                        hostingId={data.hostingId}
                        userId={data.userId}
                        propertyId={data.propertyId}
                        tenantId={data.tenantId}
                        setForceUpdate={setForceUpdate}
                        key={key} />
                ))
            }
            {
                tempData.length <=0 &&
                <NotPresent text={"No Hosting Request."}/>
            }
        </div>
    )
}

export default HostingNotiSection;

const HostNotiCard = ({ name, room, friend, phone, to, from, hostingId,userId,propertyId,tenantId, setForceUpdate }) => {
    let data={
        name:friend,
        from,
        to,
        presentDate:moment(new Date()).format("YYYY-MM-DD")
    }
    const handleAccept = () => {
        (async () => {
            if (
                await updateStudentHosting(
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
                await updateStudentHosting(
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
                <div className='payeeName'>
                    <p>{friend}</p>
                </div>
                <div className='payeeRoom'>
                    <p>{phone}</p>
                </div>
            </div>
            <div className='paymentMeta'>
                <div className='paymentMetaDate'>
                    <p>From:{from}</p>
                </div>
                <div className='paymentMetaMode'>
                    <p>To : {to}</p>
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