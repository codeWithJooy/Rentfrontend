import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux';
import { getComplaints } from '../../actions/Student/studentAction';
import { useHistory } from "react-router-dom"
import NotPresent from './NotPresent';

const ComplaintNotiSection = () => {
    const { userId, propertyId } = useSelector(state => state.user)
    const [tempData, setTempData] = useState([])
    useEffect(() => {
        (async () => {
            let data = await getComplaints(userId, propertyId)
            setTempData(data)
        })()
    },[])
    return (
        <div className='paymentNotiSection'>
             {
                tempData.length > 0 &&
                tempData.reverse().map((data, key) => (
                    <ComplaintNotiCard type={data.type} subType={data.subType} name={data.name} room={data.room} date={data.date} status={data.status} key={key} />
                    ))
                }
            {
                tempData.length <=0 &&
                <NotPresent text={"No Complaints Present."}/>
            }    
        </div>
    )
}

export default ComplaintNotiSection;

const ComplaintNotiCard = ({ type, subType, name, room, date, status }) => {
    const history = useHistory()
    const handleClick = () => {
        history.push("/complaintSection")
    }
    return (
        <div className='paymentNotiCard' onClick={handleClick}>
            <div className='paymentDetails'>
                <div className='payType'>
                   <p>{type}</p>
                </div>
                <div className='payAmount'>
                    <p>{subType}</p>
                </div>
            </div>
            <div className='payeeDetails'>
                <div className='payeeName'>
                    <p>{name}</p>
                </div>
                <div className='payeeRoom'>
                    <p>{room}</p>
                </div>
            </div>
            <div className='paymentMeta'>
                <div className='paymentMetaDate'>
                    <p>Raise On:{date}</p>
                </div>
                <div className='paymentMetaMode'>
                    <p>{status}</p>
                </div>
            </div>
        </div>
    )
}