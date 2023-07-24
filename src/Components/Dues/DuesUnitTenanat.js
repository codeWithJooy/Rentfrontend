import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./DuesRoom.css";
import { getAllRooms, getRoomName } from "../../actions/roomActions";
import { getTenants } from "../../actions/tenantAction";
import { calculateTotalDues } from "../../helper";
const DuesUnitTenant = ({ setOpen, setDueSetData }) => {
  const user = useSelector((state) => state.user);
  const [tenants, setTenants] = useState([]);
  useEffect(() => {
    (async () => {
      let data = await getTenants(user.userId, user.propertyId);
      console.log(data);
      setTenants(data);
    })();
  }, []);

  return (
    <div className="duesRoom">
      {tenants &&
        tenants.map((unit, key) => (
          <TenantDuesCard
            key={key}
            data={unit}
            setOpen={setOpen}
            setDueSetData={setDueSetData}
          />
        ))}
    </div>
  );
};

export default DuesUnitTenant;

const TenantDuesCard = ({ data, setOpen, setDueSetData }) => {
  const [roomName, setRoomName] = useState("");
  const { userId, propertyId } = useSelector((state) => state.user);
  const obj = {
    title: `Tenant : ${data.name}`,
    dueType: useSelector((state) => state.due.dueType),
    id: data._id,
    sharing: "Single",
    useFor: "tenant",
    split: "whole",
  };
  const handleDueTenant = () => {
    setDueSetData(obj);
    setOpen(true);
  };
  useEffect(() => {
    (async () => {
      setRoomName(await getRoomName(userId, propertyId, data.roomId));
    })();
  }, []);
  return (
    <div className="roomDuesCard">
      <div className="roomDuesTop">
        <div className="roomDuesroom">
          <p>{data.name}</p>
        </div>
        <div className="roomDuesButton">
          <button className="buttonPresent" onClick={handleDueTenant}>
            Add Dues
          </button>
        </div>
      </div>
      <div className="roomDuesBottom">
        <div className="roomDuesExtra">
          <p>Dues : Rs {calculateTotalDues(data.dues)}</p>
        </div>
        <div className="roomDuesRoom">
          <p>Room: {roomName}</p>
        </div>
      </div>
    </div>
  );
};
