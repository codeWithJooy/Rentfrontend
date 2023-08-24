import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./StudentAccount.css";
import StudentHeader from "../../../Components/Header/StudentHeader/StudentHeader";
import StudentFooter from "../../../Components/Footer/StudentFooter/StudentFooter";
import StudentAccountNavbar from "./StudentAccountNavbar";
import StudentAccountCard from "./StudentAccountCard";
import { getStudentDuesStatus, getStudentExpenses } from "../../../actions/Student/studentAction";
import Payment from "../../../Components/Student/StudentExtra/Payment";
import StudentExpenceCard from "./StudentExpenceCard";

const StudentAccount = () => {
  const [select, setSelect] = useState("dues")
  const [open, setOpen] = useState(false)
  const [forceUpdate, setForceUpdate] = useState(true)
  return (
    <div className="studentAccount">
      <StudentHeader />
      <StudentAccountNavbar select={select} setSelect={setSelect} />
      {
        select == "dues" &&
        <StuAccDues setOpen={setOpen} forceUpdate={forceUpdate} setForceUpdate={setForceUpdate} />
      }
      {
        select == "expenses" &&
        <StuAccExpenses />
      }
      {
        open && <Payment setPaymentModel={setOpen} setPaymentPageUpdate={setForceUpdate} />
      }
      <StudentFooter page={"Account"} />
    </div>
  );
};

export default StudentAccount;


const StuAccDues = ({ setOpen, forceUpdate, setForceUpdate }) => {
  const [duesData, setDuesData] = useState([])
  const { userId, propertyId, tenantId } = useSelector((state) => state.student.studentData)
  useEffect(() => {
    (async () => {
      let dues = await getStudentDuesStatus(userId, propertyId, tenantId)
      setDuesData(dues)
      setForceUpdate(false)
    })()
  }, [forceUpdate])
  return (
    <div className="studentAccSection">
      {
        duesData && duesData.filter((unit) => unit.due - unit.collections > 0)
          .map((data, key) => (
            <StudentAccountCard
              key={key}
              data={data}
              setPaymentModel={setOpen}

            />
          ))
      }

    </div>
  )
}

const StuAccExpenses = () => {

  const { userId, propertyId, tenantId } = useSelector(state => state.student.studentData)
  const [expenseData, setExpenseData] = useState([])
  useEffect(() => {
    (async () => {
      let expenses = await getStudentExpenses(userId, propertyId, tenantId)
      setExpenseData(expenses)
    })()
  }, [])
  return (
    <div className="studentAccSection">
      {
        expenseData && expenseData.map((data, key) => (
          <StudentExpenceCard data={data} />
        ))
      }
    </div>
  )
}