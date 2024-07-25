import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getTenantDetails, setTenant } from "../../actions/tenantAction";
import { getRoomName } from "../../actions/roomActions";
import { getDuesTenant } from "../../actions/duesAction";

const TenantCard = ({ tenantId, name, roomId, number, doj, roomName }) => {
  const user = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);
  const [due, setDue] = useState([])
  const dispatch = useDispatch();
  const history = useHistory();
  const handleClick = () => {
    setOpen(!open);
  };
  const handleCardClick = () => {
    getTenantDetails(user.userId, user.propertyId, tenantId)
    dispatch(setTenant(tenantId));
    history.push("/tenantProfile");
  };
  console.log(roomId);
  const [room, setRoom] = useState("Unknown");
  useEffect(() => {
    (async () => {
      setRoom(await getRoomName(user.userId, user.propertyId, roomId));
      setDue(await getDuesTenant(user.userId, user.propertyId, tenantId))

    })();
  }, []);
  return (
    <div className="tenantCard">
      <div className="cardTop" onClick={handleCardClick}>
        <div className="cardName">{name}</div>
        <div className="cardRoom">{roomName}</div>
      </div>
      <div className="cardMiddle">
        <div className="cardPhone">{number}</div>
        <div className="cardJoin">{doj}</div>
      </div>
      <div className="cardDues">
        <div className="dueTitle">
          <div className="Dues">Dues</div>
          <img
            src={`${open ? "Assets/Tenant/down.png" : "Assets/Tenant/up.png"}`}
            onClick={handleClick}
          />
        </div>
        {open && (
          <div className="duesHolder">
            {due
              .filter(
                (unit) => parseInt(unit.due) - parseInt(unit.collections) > 0
              )
              .map((data, index) => (
                <div className="duesSection" key={index}>
                  <div className="duesName">{data.dueType}</div>
                  <div className="duesValue">
                    Rs {parseInt(data.due) - parseInt(data.collections)}
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TenantCard;
