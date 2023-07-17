import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Member.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { getMembers } from "../../actions/memberAction";

const Member = () => {
  const history = useHistory();
  const user = useSelector((state) => state.user);
  const [memData, setMemData] = useState(null);
  const handleAdd = () => {
    history.push("/addMember");
  };
  useEffect(() => {
    if (!memData) {
      (async () => {
        let data = await getMembers(user.userId, user.propertyId);
        setMemData(data);
      })();
    }
  }, []);
  if (memData) {
    return (
      <div className="memberMain">
        <Header />
        <div className="memContainer" style={{ background: "#f5f3f4" }}>
          <div className="searchMember">
            <div className="searchMemBar">
              <img src="Assets/Member/search.png" />
              <input type="text" placeholder="Search Team Member" />
            </div>
            <button onClick={handleAdd}>Add Team</button>
          </div>
          {memData.map((data, val) => (
            <MemCard data={data} />
          ))}
        </div>
        <Footer />
      </div>
    );
  } else return <></>;
};

export default Member;

const MemCard = ({ data }) => {
  console.log("data is ", data);
  const history = useHistory();
  const handleCard = () => {
    history.push("/memberProfile");
  };
  return (
    <div className="memCard" onClick={handleCard}>
      <div className="memTop">
        <div className="memPic">
          <img src="Assets/Member/user.png" />
        </div>
        <div className="memDetails">
          <div className="memDetailsTop">
            <div className="memName">
              <p>{data.personal.name}</p>
            </div>
            <div className="memDesig">
              <div className="memDesignation">
                <p>{data.personal.designation}</p>
              </div>
            </div>
          </div>
          <div className="memDetailsBottom">
            <p>{data.personal.doj}</p>
          </div>
        </div>
      </div>
      <div className="memBottom">
        <div className="memBottomUnit">
          <img src="Assets/Member/call.png" />
          <p>Call</p>
        </div>
        <div className="memBottomUnit">
          <img src="Assets/Member/whatsapp.png" />
          <p>whatsapp</p>
        </div>
        <div className="memBottomUnit">
          <img src="Assets/Member/app.png" />
          <p>App Access</p>
        </div>
      </div>
    </div>
  );
};
