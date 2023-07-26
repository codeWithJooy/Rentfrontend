import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./DuesRoom.css";
import { getAllRooms } from "../../actions/roomActions";
import { getRoomTenants } from "../../actions/tenantAction";
import { setDueRoom } from "../../actions/duesAction";

const DuesUnitRoom = ({ setOpen, setDueSetData }) => {
  const user = useSelector((state) => state.user);
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    (async () => {
      let data = await getAllRooms(user.userId, user.propertyId);
      console.log(data);
      setRooms(data);
    })();
  }, []);

  return (
    <div className="duesRoom">
      {rooms &&
        rooms.map((unit, key) => (
          <RoomDuesCard
            key={key}
            data={unit}
            setOpen={setOpen}
            setDueSetData={setDueSetData}
          />
        ))}
    </div>
  );
};

export default DuesUnitRoom;

const RoomDuesCard = ({ data, setOpen, setDueSetData }) => {
  const [count, setCount] = useState(0);
  const obj = {
    title: `Room : ${data.name}`,
    dueType: useSelector((state) => state.due.dueType),
    id: data.id,
    sharing: data.type,
    useFor: "room",
    split: "split",
  };
  const { userId, propertyId } = useSelector((state) => state.user);
  const handleDueRoom = () => {
    setDueSetData(obj);
    setOpen(true);
  };
  useEffect(() => {
    (async () => {
      let countData = await getRoomTenants(userId, propertyId, data.id);
      setCount(countData);
    })();
  }, []);
  return (
    <div className="roomDuesCard">
      <div className="roomDuesTop">
        <div className="roomDuesroom">
          <p>{data.name}</p>
        </div>
        <div className="roomDuesButton">
          {count > 0 && (
            <button className="buttonPresent" onClick={handleDueRoom}>
              Add Dues
            </button>
          )}
          {count <= 0 && <button className="buttonAbsent">No Tenants</button>}
        </div>
      </div>
      <div className="roomDuesBottom">
        <div className="roomDuesExtra">
          {count == 0 && <p>{count} Tenant Present</p>}
          {count == 1 && <p>{count} Tenant Staying in this room</p>}

          {count > 1 && <p>{count} Tenants are Staying in this room</p>}
        </div>
      </div>
    </div>
  );
};
