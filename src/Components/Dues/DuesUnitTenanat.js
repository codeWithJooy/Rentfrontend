import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./DuesRoom.css";
import { getAllRooms } from "../../actions/roomActions";
import { getTenants } from "../../actions/tenantAction";
const DuesUnitTenant = () => {
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
          <TenantDuesCard key={key} name={unit.name} />
        ))}
    </div>
  );
};

export default DuesUnitTenant;

const TenantDuesCard = ({ name }) => {
  return (
    <div className="roomDuesCard">
      <div className="roomDuesTop">
        <div className="roomDuesroom">
          <p>{name}</p>
        </div>
        <div className="roomDuesButton">
          <button>Add Dues</button>
        </div>
      </div>
      <div className="roomDuesBottom">
        <div className="roomDuesExtra">
          <p>Dues : Rs 1000</p>
        </div>
      </div>
    </div>
  );
};
