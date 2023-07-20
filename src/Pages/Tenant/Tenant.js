import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getTotalFloors } from "../../actions/floorActions";
import "./Tenant.css";
import { setTenant } from "../../actions/tenantAction";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { getTenants } from "../../actions/tenantAction";
import { getAllRooms, getRoomName } from "../../actions/roomActions";
import { updateToast } from "../../actions/toastActions";
import { CodeAnalogy } from "../../Components/Toasty/Toasty";
import TenantSkeleton from "../../Components/Skeletons/TenantSkeleton";
const Tenant = () => {
  const user = useSelector((state) => state.user);
  const [tenants, setTenants] = useState(null);
  const [forceUpdate, setForceUpdate] = useState(true);
  const history = useHistory();
  const handleClick = () => {
    history.push("/addtenant");
  };
  const handleFirstAdd = () => {
    (async () => {
      if (await getAllRooms(user.userId, user.propertyId)) {
        history.push("/addtenant");
      } else {
        updateToast({
          code: CodeAnalogy.ERROR,
          title: "Add Rooms First",
          message: "You need to add Rooms",
        });
      }
    })();
  };
  useEffect(() => {
    if (forceUpdate) {
      (async () => {
        if (!(await getTotalFloors(user.userId, user.propertyId))) {
          history.push("/property");
        } else {
          let data = await getTenants(user.userId, user.propertyId);
          setTenants(data);
        }
      })();
    }
    setForceUpdate(false);
  }, [forceUpdate]);
  if (tenants) {
    return (
      <div className="tenant">
        <Header />

        {tenants.length <= 0 && (
          <div className="tenantAbsent">
            <div className="absentBox">
              <p>No Tenants Added</p>
              <button onClick={handleFirstAdd}>Add Tenant</button>
            </div>
          </div>
        )}
        {tenants.length > 0 && (
          <div className="tenantHolder">
            {tenants.map((data, index) => (
              <TenantCard
                tenantId={data._id}
                name={data.name}
                roomId={data.roomId}
                number={data.number}
                doj={data.doj}
                due={data.dues}
              />
            ))}
            <img
              src="Assets/Tenant/plus.png"
              className="fab"
              onClick={handleClick}
            />
          </div>
        )}

        <Footer page={"Tenants"} />
      </div>
    );
  } else return <TenantSkeleton />;
};

export default Tenant;

const TenantCard = ({ tenantId, name, roomId, number, doj, due }) => {
  const user = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleClick = () => {
    setOpen(!open);
  };
  const handleCardClick = () => {
    dispatch(setTenant(tenantId));
    history.push("/tenantProfile");
  };
  console.log(roomId);
  const [room, setRoom] = useState("Unknown");
  useEffect(() => {
    (async () => {
      setRoom(await getRoomName(user.userId, user.propertyId, roomId));
    })();
  }, []);
  return (
    <div className="tenantCard">
      <div className="cardTop" onClick={handleCardClick}>
        <div className="cardName">{name}</div>
        <div className="cardRoom">{room}</div>
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
            {due.map((data, index) => (
              <div className="duesSection">
                <div className="duesName">{data.type}</div>
                <div className="duesValue">Rs {data.due}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
