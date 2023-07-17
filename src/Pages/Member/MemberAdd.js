import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Header from "../../Components/Header/Header";
import moment from "moment/moment";
import "./Member.css";
import { addMember } from "../../actions/memberAction";
import Footer from "../../Components/Footer/Footer";
const MemberAdd = () => {
  const history = useHistory();
  const { userId, propertyId } = useSelector((state) => state.user);
  const [currentDate, setCurrentDate] = useState(moment().format("YYYY-MM-DD"));
  const [member, setMember] = useState({
    name: "",
    phone: "",
    designation: "Owner",
    doj: currentDate,
  });
  const handleChange = (e) => {
    setMember({ ...member, [e.target.name]: e.target.value });
  };
  const handleTimeChange = (e) => {
    const newDate = moment(new Date(e.target.value)).format("YYYY-MM-DD");
    setCurrentDate(newDate);
    setMember({
      ...member,
      doj: newDate,
    });
  };
  const handleAdd = async () => {
    const val = await addMember(
      userId,
      propertyId,
      member.name,
      member.phone,
      member.designation,
      member.doj
    );
    if (val) {
      history.push("/member");
    }
  };
  return (
    <div className="memberMain">
      <Header name={"Add Member"} link={"/member"} type={"back"} />
      <div className="memContainer">
        <div className="sectionContainer" style={{ marginTop: "10px" }}>
          <div className="sectionIpFull">
            <div className="sectionIpHeader">
              <p>Name</p>
            </div>
            <div className="sectionIpInput">
              <input
                type="text"
                name="name"
                value={member.name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="sectionIpFull">
            <div className="sectionIpHeader">
              <p>Phone</p>
            </div>
            <div className="sectionIpInput">
              <input
                type="text"
                name="phone"
                value={member.phone}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="sectionIpFull">
            <div className="sectionIpHeader">
              <p>Designation</p>
            </div>
            <div className="sectionIpInput">
              <select
                name="designation"
                value={member.designation}
                onChange={handleChange}
              >
                <option>Owner</option>
                <option>Partner</option>
                <option>Relative</option>
                <option>Manager</option>
                <option>Warden</option>
                <option>Staff</option>
                <option>Accountant</option>
                <option>Cook</option>
                <option>Cleaner</option>
                <option>Plumber</option>
                <option>Electrician</option>
                <option>Carpenter</option>
                <option>Guard</option>
              </select>
            </div>
          </div>
          <div className="sectionIpFull">
            <div className="sectionIpHeader">
              <p>Date Of Joining</p>
            </div>
            <div className="sectionIpInput">
              <input
                type="date"
                value={currentDate}
                onChange={handleTimeChange}
              />
            </div>
          </div>
          <button onClick={handleAdd}>Add Member</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MemberAdd;
