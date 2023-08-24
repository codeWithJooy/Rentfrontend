import React from 'react'
import "./StudentAccount.css"
import { dispatchAction } from '../../../actions/actionHelper'
import { SET_STUDENT_PAYMENT_DETAILS } from '../../../actionTypes/studentActionType'

const StudentAccountCard = ({ data, setPaymentModel }) => {
    const { userId, propertyId, tenantId, dueType, due, collections } = data
    let obj = {
        userId,
        propertyId,
        tenantId,
        dueType,
        due: parseInt(due) - parseInt(collections),
        collections: parseInt(due) - parseInt(collections)
    }
    const handleClick = () => {
        setPaymentModel(true)
        dispatchAction(SET_STUDENT_PAYMENT_DETAILS, obj)
    }
    return (
        <div className="studentAccCard">
            <div className="studentAccDetails studentMargin">
                <div className="studentAccType">
                    <p>{data.dueType}</p>
                </div>
                <div className="studentCost">
                    <p>Rs {parseInt(data.due) - parseInt(data.collections)}</p>
                </div>
            </div>
            <div className="studentAccDetails">
                <div className="studentDate">
                    <p>{data.dueDate}</p>
                </div>
                <div className="studentButton" onClick={handleClick}>
                    <button>Pay</button>
                </div>
            </div>
        </div>
    )
}

export default StudentAccountCard;