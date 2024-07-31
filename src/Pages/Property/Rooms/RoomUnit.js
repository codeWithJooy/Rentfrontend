import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Rooms.css";
import { roomData } from "../../../data/roomData";
import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

import {
  getRoomName,
  getSingleRoom,
  roomUpdate,
  selectedRoom,
  updateRoom,
} from "../../../actions/roomActions";
import { updateToast } from "../../../actions/toastActions";
import { CodeAnalogy } from "../../../Components/Toasty/Toasty";
import { getTenantsRoomWise } from "../../../actions/tenantAction";
import TenantCard from "../../../Components/Tenant/TenantCard";

const RoomUnit = () => {
  const location = useLocation();
  const roomId=useSelector((state)=>state.room.selectedRoom)
  const user=useSelector((state)=>state.user)
  const[roomName,setRoomName]=useState("")
  const { active } = location.state || {};
  const [navActive, setNavActive] = useState(active);

  const handleDetailsNav = () => {
    setNavActive("details");
  };
  const handleTenantNav = () => {
    setNavActive("tenant");
  };
  useEffect(()=>{
    (async()=>{
      let data=await getRoomName(user.userId,user.propertyId,roomId)
      setRoomName(data)
    })()
  },[])
  return (
    <div className="rooms">
      <Header type={"back"} name={roomName} link={"/rooms"} />
      <div className="roomMain">
        <div className="roomNavbar">
          <div
            className={`navUnit ${navActive === "tenant" ? "navActive" : ""}`}
            onClick={handleTenantNav}
          >
            {"Room's Tenant"}
          </div>
          <div
            className={`navUnit ${navActive === "details" ? "navActive" : ""}`}
            onClick={handleDetailsNav}
          >
            {"Room Details"}
          </div>
        </div>
        {navActive === "details" ? <RoomSection /> : <TenantDetails />}
      </div>
      <Footer page={"Property"} />
    </div>
  );
};
export default RoomUnit;

const TenantDetails = () => {
  let user = useSelector((state) => state.user);
  const roomId = useSelector((state) => state.room.selectedRoom);
  const [search, setSearch] = useState("");
  let [forceUpdate, setForceUpdate] = useState(true);
  let [tenants, setTenants] = useState([]);
  const history = useHistory();
  const handleClick = () => {
    history.push("/addtenantRoom");
  };
  useEffect(() => {
    if (forceUpdate) {
      (async () => {
        let data = await getTenantsRoomWise(
          user.userId,
          user.propertyId,
          roomId
        );
        setTenants(data);
        setForceUpdate(false);
      })();
    }
  }, [forceUpdate]);
  let filteredTenants = tenants;
  if (search) {
    filteredTenants = tenants.filter((tenant) => {
      return (
        tenant.name.toLowerCase().includes(search.toLocaleLowerCase()) ||
        tenant.number.includes(search) 
      );
    });
  }
  return (
    <div className="tenantDetails">
      {tenants.length == 0 && (
        <div className="tenantEmpty" style={{marginTop:"150px"}}>
          <div className="emptyPics">
            <img src="Assets/Property/bed.png" />
          </div>
          <div className="emptyText">{"No Tenants added yet."}</div>
          <div className="emptyButton">
            <button onClick={handleClick}>Add Tenant</button>
          </div>
        </div>
      )}
        {tenants.length > 0 && (
          <div className="tenantHolder">
            <div className="tenantSearch">
              <div className="tenantSearchBox">
                <input
                  placeholder="Search Tenant By Name,Number,Room"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <button className="tenantAddBox" onClick={handleClick}>
                Add Tenant
              </button>
            </div>
            {filteredTenants.map((data, index) => (
              <TenantCard
                key={index}
                tenantId={data._id}
                name={data.name}
                roomName={data.roomName}
                roomId={data.roomId}
                number={data.number}
                doj={data.doj}
                due={data.dues}
              />
            ))}
          </div>
        )}
    </div>
  );
};
const RoomSection = () => {
  return (
    <>
      <RoomDetails />
      <RoomFacilities />
    </>
  );
};
const RoomDetails = () => {
  const roomId = useSelector((state) => state.room.selectedRoom);
  const floorName = useSelector((state) => state.floor.selectedFloor.name);
  const user = useSelector((state) => state.user);

  const [edit, setEdit] = useState(false);
  const [data, setData] = useState([]);

  const handleEdit = () => {
    setEdit(!edit);
    updateToast({
      code: CodeAnalogy.SUCCESS,
      title: "Edit Mode On",
      message: "Can Edit Now",
    });
  };
  const handleUpdate = () => {
    updateRoom(user.userId, user.propertyId, data);
    setData(data);
    setEdit(!edit);
  };
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    if (!edit) {
      (async () => {
        let roomData = await getSingleRoom(
          user.userId,
          user.propertyId,
          roomId
        );
        setData(roomData);
      })();
    }
  }, []);
  return (
    <div className="roomDetails">
      <div className="detailsHeader">Room Details</div>
      <div className="roomDetailsHalf">
        <div className="halfUnitLeft">
          <div className="roomDetailsUnit">
            <div className="detailsLabel">
              <p>{"Room Name"}</p>
            </div>
            <div className="detailsInput">
              <input
                type="text"
                name="name"
                defaultValue={data.name}
                onChange={handleChange}
                readOnly={!edit}
              />
            </div>
          </div>
        </div>
        <div className="halfUnitRight">
          <div className="roomDetailsUnit">
            <div className="detailsLabel">
              <p>{"Unit Type"}</p>
            </div>
            <div className="detailsInput">
              <p>Room</p>
            </div>
          </div>
        </div>
      </div>
      <div className="roomDetailsHalf">
        <div className="fullUnit">
          <div className="roomDetailsUnit">
            <div className="detailsLabel">
              <p>{"Floor"}</p>
            </div>
            <div className="detailsInput">
              <p>{floorName}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="roomDetailsHalf">
        <div className="halfUnitLeft">
          <div className="roomDetailsUnit">
            <div className="detailsLabel">
              <p>{"Sharing Type"}</p>
            </div>
            <div className="detailsInput">
              <p>{data.type}</p>
            </div>
          </div>
        </div>
        <div className="halfUnitRight">
          <div className="roomDetailsUnit">
            <div className="detailsLabel">
              <p>{"Rent"}</p>
            </div>
            <div className="detailsInput">
              Rs
              <input
                type="text"
                name="rate"
                value={data.rate}
                onChange={handleChange}
                className="rateInput"
                readOnly={!edit}
              />{" "}
              / bed
            </div>
          </div>
        </div>
      </div>
      <img
        src={`${
          edit ? "Assets/Property/done.png" : "Assets/Property/edit.png"
        }`}
        className="editButton"
        onClick={edit ? handleUpdate : handleEdit}
      />
    </div>
  );
};

const RoomFacilities = () => {
  return (
    <div className="facilitySection">
      <div className="facilityHeader">Room Facilities</div>
      <div className="facilities">
        {roomData.map((data, index) => (
          <FacilityIcon
            key={index}
            title={data.title}
            normal={data.normal}
            selected={data.selected}
          />
        ))}
      </div>
    </div>
  );
};

const FacilityIcon = ({ title, normal, selected }) => {
  const [selectedIcon, setSelectedIcon] = useState(false);
  return (
    <div
      className="facilityIcons"
      onClick={() => setSelectedIcon(!selectedIcon)}
    >
      <img src={`${selectedIcon ? selected : normal}`} />
      <p className={`${selectedIcon ? "textSelected" : "textNormal"}`}>
        {title}
      </p>
    </div>
  );
};
