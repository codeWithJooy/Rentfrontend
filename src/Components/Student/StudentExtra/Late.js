import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./HostFriend.css";
import moment from 'moment'
import {  addStudentLate } from "../../../actions/Student/studentAction";

const Late = ({ setLate }) => {
    const { userId, propertyId, tenantId } = useSelector(state => state.student.studentData)
    let history = useHistory()
    let tempDate = new Date()
    const [data, setData] = useState({
        time: tempDate.getHours() + ':' + tempDate.getMinutes(),
        reason: "",
        presentDate: moment(new Date()).format("YYYY-MM-DD")
    })
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const handleSubmit = () => {
        (async () => {
            if (await addStudentLate(userId, propertyId, tenantId, data)) {
                history.push("/student")
                setLate(false)
            }
        })()
    }
    return (
        <div className="extraUnitBg">
            <div className="extraUnitMainSection">
                <div className="extraUnitTop">
                    <img src="Assets/Students/close.png" onClick={() => setLate(false)} />
                    <div className="extraUnitHeader">
                        <p>Returning Late </p>
                    </div>
                    <div className="extraUnitSub">
                        <p>Specify The Reason and Time of Returning.</p>
                    </div>
                </div>
                <div className="extraUnitData">
                    <div className="extraUnitInput">
                        <label>Time Of Returning</label>
                        <input type="time" name="time" value={data.time} onChange={(e) => handleChange(e)} />
                    </div>
                </div>
                <div className="extraUnitData">
                    <div className="extraUnitInput">
                        <label>Reason For Being Late</label>
                        <input type="text" name="reason" value={data.reason} onChange={(e) => handleChange(e)} />
                    </div>
                </div>

                <div className="extraUnitData">
                    <button onClick={handleSubmit}>Ask For Permission</button>
                </div>
            </div>
            ;
        </div>
    );
};

export default Late;