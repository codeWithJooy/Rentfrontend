import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import "./Tenant.css";
import Header from "../../Components/Header/Header";
import TenantPersonal from "../../Components/Tenant/TenantPersonal";
import TenantPassBook from "../../Components/Tenant/TenantPassBook";
import { getATenant } from "../../actions/tenantAction";

import {
  getTenantCollection,
  getTenantDiscount,
} from "../../actions/collectionAction";
import { getDuesTenant } from "../../actions/duesAction";

const TenantProfile = () => {
  const history = useHistory();
  const [navActive, setNavActive] = useState("passbook");
  const { userId, propertyId } = useSelector((state) => state.user);
  const tenantId = useSelector((state) => state.tenant.selectedTenant);
  const [forceUpdate, setForceUpdate] = useState(true);

  useEffect(() => {
    if (forceUpdate) {
      getATenant(userId, propertyId, tenantId);
      getDuesTenant(userId, propertyId, tenantId);
      getTenantCollection(userId, propertyId, tenantId);
      getTenantDiscount(userId, propertyId, tenantId);
      setForceUpdate(false);
    }
  }, [forceUpdate]);
  return (
    <div className="tenant">
      <Header name={"Tenants Profile"} link={"/tenant"} type={"back"} />
      <div className="memNav">
        <div
          className={`memNavUnit ${navActive == "profile" ? "memNavActive" : ""
            }`}
          onClick={() => setNavActive("profile")}
        >
          <p>Profile Details</p>
        </div>
        <div
          className={`memNavUnit ${navActive == "passbook" ? "memNavActive" : ""
            }`}
          onClick={() => setNavActive("passbook")}
        >
          <p>Passbook</p>
        </div>
      </div>
      {navActive == "profile" && <TenantPersonal />}
      {navActive != "profile" && (
        <TenantPassBook setForceUpdate={setForceUpdate} />
      )}
    </div>
  );
};

export default TenantProfile;
