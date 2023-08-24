import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { addCollection, getReceiptId, getTempCollection } from '../../actions/collectionAction';
import moment from "moment";

const PaymentNotiSection = () => {
    const { userId, propertyId } = useSelector(state => state.user)
    const [forceUpdate, setForceUpdate] = useState(true)
    const [tempData, setTempData] = useState([])
    useEffect(() => {
        (async () => {
            let data = await getTempCollection(userId, propertyId)
            setTempData(data)
            setForceUpdate(false)
        })()
    }, [forceUpdate])
    return (
        <div className='paymentNotiSection'>
            {
                tempData && tempData.length > 0 &&
                tempData.reverse().map((data, key) => (
                    <PaymentNotiCard type={data.type}
                        amount={data.amount}
                        date={data.date}
                        mode={data.mode}
                        name={data.name}
                        room={data.room}
                        openingDue={data.due}
                        tenantId={data.tenantId}
                        setForceUpdate={setForceUpdate}
                        key={key} />
                ))
            }
        </div>
    )
}

export default PaymentNotiSection;

const PaymentNotiCard = ({ type, amount, date, mode, name, room, openingDue, tenantId, setForceUpdate }) => {
    const { userId, propertyId, propertyName } = useSelector(state => state.user)

    const [collection, setCollection] = useState({
        userId,
        propertyId,
        tenantId,
        type,
        amount,
        discount: 0,
        date: moment(new Date(date)).format("YYYY-MM-DD"),
        mode: mode,
        receiptId: "",
        openingDue
    });
    const handleAccept = () => {
        (async () => {
            if (
                await addCollection(
                    collection.userId,
                    collection.propertyId,
                    collection.tenantId,
                    collection.type,
                    collection.amount,
                    collection.date,
                    collection.mode,
                    collection.discount,
                    collection.receiptId,
                    collection.openingDue,
                )
            ) {
                setForceUpdate(true)
            }
        })()
    }
    useEffect(() => {
        (async () => {
            let receiptData = await getReceiptId(
                userId,
                propertyId,
                propertyName,
                type,
                collection.date
            )
            setCollection({ ...collection, receiptId: receiptData })
        })()
    }, [])
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
                    <button className='accept' onClick={handleAccept}>Accept</button>
                </div>
                <div classname="paymentButtonHolder">
                    <button className='decline'>Decline</button>
                </div>
            </div>

        </div>
    )
}