import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addRooms } from "../../../actions/floorActions";
import "./Floors.css";
import { roomAddHelper } from "../../../helper";
import { setRooms } from "../../../actions/roomActions";

const AddFloor = ({ setFloorDetails, floor }) => {
  const [roomActive, setRoomActive] = useState(false);
  const handleRoomActive = () => {
    setRoomActive(!roomActive);
  };

  return (
    <div className="floorAdd">
      <div className="floorAddUnit">
        <div className="addUnitTop">
          <p>Add Units to {floor.name}</p>
          <img
            src="Assets/Footer/plus.png"
            onClick={() => setFloorDetails(false)}
          />
        </div>
        <div className="addUnitMain">
          <div className="addMainTitle">
            <p>Select Room/Unit types on this floor</p>
          </div>
          <div className="addUnitSelect">
            <div
              className={roomActive ? `addSelectUnitActive` : `addSelectUnit`}
              onClick={handleRoomActive}
            >
              Rooms
            </div>
            <div className="addSelectUnit">RK</div>
            <div className="addSelectUnit">BHK</div>
            <div className="addSelectUnit">Apartment</div>
          </div>
        </div>
        {roomActive && (
          <AddUnit floor={floor} setFloorDetails={setFloorDetails} />
        )}
      </div>
    </div>
  );
};

export default AddFloor;

const AddUnit = ({ floor, setFloorDetails }) => {
  const user = useSelector((state) => state.user);
  const [roomTypes, setRoomTypes] = useState({
    single: 0,
    double: 0,
    triple: 0,
  });
  const history = useHistory();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setRoomTypes({ ...roomTypes, [e.target.name]: e.target.value });
  };
  const handleRoomsAdd = () => {
    (async () => {
      if (
        await addRooms(
          user.userId,
          user.propertyId,
          floor.name,
          floor.id,
          roomTypes.single,
          roomTypes.double,
          roomTypes.triple
        )
      ) {
        setFloorDetails(false);
      }
    })();
  };

  return (
    <div className="addRoom">
      <div class="addRoomQuantity">
        <div className="addQuantityTitle">
          <p>Room</p>
        </div>
        <div className="addQuantityUnit">
          <input
            type="text"
            name="single"
            onChange={handleChange}
            value={roomTypes.single}
          />
          <p>Sigle Sharing</p>
        </div>
        <div className="addQuantityUnit">
          <input
            type="text"
            name="double"
            onChange={handleChange}
            value={roomTypes.double}
          />
          <p>Double Sharing</p>
        </div>
        <div className="addQuantityUnit">
          <input
            type="text"
            name="triple"
            onChange={handleChange}
            value={roomTypes.triple}
          />
          <p>Triple Sharing</p>
        </div>
      </div>
      <button className="addRoomButton" onClick={handleRoomsAdd}>
        Add Unit
      </button>
    </div>
  );
};
