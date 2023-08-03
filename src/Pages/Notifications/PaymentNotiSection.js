import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux';
import { getTempCollection } from '../../actions/collectionAction';

const PaymentNotiSection = () => {
    const { userId, propertyId } = useSelector(state => state.user)
    const [tempData, setTempData] = useState([])
    useEffect(() => {
        (async () => {
            let data = await getTempCollection(userId, propertyId)
            setTempData(data)
        })()
    },[])
    return (
        <div className='paymentNotiSection'>
            {
                tempData.length > 0 &&
                tempData.reverse().map((data, key) => (
                    <PaymentNotiCard type={data.type}
                        amount={data.amount}
                        date={data.date}
                        mode={data.mode}
                        name={data.name}
                        room={data.room}
                        key={key} />
                ))
            }
        </div>
    )
}

export default PaymentNotiSection;

const PaymentNotiCard = ({type,amount,date,mode,name,room}) => {
    return (
        <div className='paymentNotiCard'>
            <div className='paymentDetails'>
                <div className='payType'>
                    <p>{type}</p>
                </div>
                <div className='payAmount'>
                   <p>Rs {amount}</p>
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
                    <p>Paid On:{date}</p>
                </div>
                <div className='paymentMetaMode'>
                    <p>Paid using : {mode}</p>
                </div>
            </div>
            <div className='paymentButtons'>
                <div className='paymentButtonHolder'>
                    <button className='accept'>Accept</button>
                </div>
                <div classname="paymentButtonHolder">
                   <button className='decline'>Decline</button> 
                </div>   
            </div>

        </div>
    )
}