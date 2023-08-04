import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux';
import { getComplaints, updateStatus } from '../../actions/Student/studentAction';
import { useHistory } from "react-router-dom"
import "./Complaints.css"
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

const Complaints = () => {
    const { userId, propertyId } = useSelector(state => state.user)
    const [tempData, setTempData] = useState([])
    useEffect(() => {
        (async () => {
            let data = await getComplaints(userId, propertyId)
            setTempData(data)
        })()
    },[])
    return (
        <div className='comMain'>
            <Header type="back" name="Complaints" link="/home"/>
            <div className='comContainer'>
            {
                tempData.length > 0 &&
                tempData.reverse().map((data, key) => (
                    <ComplaintCard type={data.type}
                        tenantId={data.tenantId}
                        description={data.description}
                        subType={data.subType}
                        name={data.name}
                        room={data.room}
                        date={data.date}
                        status={data.status}
                        id={data.id}
                        key={key} />
                    ))
                }
            </div>    
            <Footer />
        </div>
    )
}

export default Complaints

const ComplaintCard = ({ type, subType, name, room, date, status,description,tenantId,id }) => {
    const [compStatus,setCompStatus]=useState(status)
    const handleStatus = (e) => {
        setCompStatus(e.target.value)
        updateStatus(id,e.target.value)
    }
    const handeCall = () => {
        window.open('tel:+919007453398')
    }
    return (
        <div className='comCard'>
            <div className='comCardTop'>
                <div className='comCardImg'>
                  <img src="Assets/components/picture.png" />
                </div>
                <div className='comCardText'>
                    <div className='comCardType'>
                        <span>{type}</span> <span>{subType}</span>
                    </div>
                    <div className='comCardDescription'>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
            <div className='comCardBottom'>
                <div className='comCardName'>
                    <p>{name}</p>
                </div>
                <div className='comCardRoom' onClick={handeCall}>
                    <p>{room}</p>
                </div>
            </div>
            <div className='comCardStatus'>
                <div className='comStatusTitle'>
                    <p>Status</p>
                </div>
                <div className='comStatusSelect'>
                    <select value={compStatus} onChange={handleStatus}>
                    <option>Complaint Received
                        </option>
                        <option>
                            Complaint Verified
                        </option>
                        <option>
                            Need More Time
                        </option>
                        <option>
                            Team Is Working
                        </option>
                        <option>
                            Resolved
                        </option>
                    </select>
                </div>
            </div>
        </div>
    )
}
