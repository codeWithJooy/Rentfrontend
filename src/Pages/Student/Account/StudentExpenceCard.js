import React from 'react'
import "./StudentAccount.css"
import { dispatchAction } from '../../../actions/actionHelper'
import { SET_STUDENT_PAYMENT_DETAILS } from '../../../actionTypes/studentActionType'
import { useSelector } from 'react-redux'
import { getReceiptData } from '../../../actions/collectionAction'
import { useHistory } from 'react-router-dom'

const StudentExpenceCard = ({ data }) => {
    const { userId, propertyId, tenantId, dueType, amount, receiptId } = data
    const propertyName = useSelector(state => state.student.studentData)
    const history = useHistory()

    const handleClick = () => {
        getReceiptData(userId, propertyId, propertyName, tenantId, receiptId)
        history.push("/receipt")
    }
    return (
        <div className="studentAccCard">
            <div className="studentAccDetails studentMargin">
                <div className="studentAccType">
                    <p>{dueType}</p>
                </div>
                <div className="studentCost">
                    <p>Rs {amount}</p>
                </div>
            </div>
            <div className="studentAccDetails">
                <div className="studentDate">
                    <p></p>
                </div>
                <div className="studentButton" onClick={handleClick}>
                    <button>Show Receipt</button>
                </div>
            </div>
        </div>
    )
}

export default StudentExpenceCard;