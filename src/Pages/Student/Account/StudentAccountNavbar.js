import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import "./StudentAccount.css"
import { getStudentTotalDues, getStudentTotalExpenses } from '../../../actions/Student/studentAction'

const StudentAccountNavbar = ({ select, setSelect }) => {
    const { userId, propertyId, tenantId } = useSelector((state) => state.student.studentData)
    const [dues, setDues] = useState("")
    const [expense, setExpense] = useState("")

    useEffect(() => {
        (async () => {
            let total_dues = await getStudentTotalDues(userId, propertyId, tenantId)
            let total_expenses = await getStudentTotalExpenses(userId, propertyId, tenantId)
            setDues(total_dues)
            setExpense(total_expenses)
        })()
    }, [])
    return (
        <div className="studentAccNavbar">
            <div className={`${select == "dues" ? "studentAccNavUnit activeAccNavUnit" : "studentAccNavUnit"}`} onClick={() => setSelect("dues")}>
                <div className="accNavHeader">
                    <p>My Dues</p>
                </div>
                <div className="accNavAmount">
                    <p>Rs {dues}</p>
                </div>
            </div>
            <div className={`${select == "expense" ? "studentAccNavUnit activeAccNavUnit" : "studentAccNavUnit"}`} onClick={() => setSelect("expense")}>
                <div className="accNavHeader">
                    <p>My Expenses</p>
                </div>
                <div className="accNavAmount">
                    <p>Rs {expense}</p>
                </div>
            </div>
        </div>
    )
}

export default StudentAccountNavbar;