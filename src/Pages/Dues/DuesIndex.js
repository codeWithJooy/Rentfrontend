import React, { useState, useEffect } from "react";
import "./DuesIndex.css";
import { useSelector, useDispatch } from "react-redux";
import {
  getTenants,
  getTenantsCount,
  setTenant,
} from "../../actions/tenantAction";
import { allDues, calculateTotalDues } from "../../helper";
const DuesIndex = () => {
  const [open, setOpen] = useState(false);
  const user = useSelector((state) => state.user);
  const [dues, setDues] = useState([]);
  const [tenantCount, setTenantCount] = useState(0);
  useEffect(() => {
    (async () => {
      let data = await getTenants(user.userId, user.propertyId);
      let count = await getTenantsCount(user.userId, user.propertyId);
      setDues(data);
      setTenantCount(count);
    })();
  }, []);
  return (
    <div className="duesContainer">
      <DuesMainCard tenantCount={tenantCount} dues={dues} />
      {dues &&
        dues.map((data, index) => (
          <DuesDataCard data={data} setOpen={setOpen} key={index} />
        ))}
      {open && <DueCategory setOpen={setOpen} />}
    </div>
  );
};
export default DuesIndex;

//Due Card For Each Tenant
const DuesDataCard = ({ data, setOpen }) => {
  const dispatch = useDispatch();

  const handleRecord = () => {
    dispatch(setTenant(data));
    setOpen(true);
  };
  return (
    <div className="duesDataCard">
      <div className="ddcTop">
        <div className="ddcHead">
          <div className="ddcTitle">
            <p>{data.name}</p>
          </div>
          <div className="ddcDue">
            <p>Rs {calculateTotalDues(data.dues)}</p>
          </div>
        </div>
        <div className="ddcHead">
          <div className="ddcRoom">
            <p>Ground 1</p>
          </div>
          <div className="ddcDueDate">
            <p>{data.doj}</p>
          </div>
        </div>
      </div>
      <div className="ddcBottom">
        <button className="ddcRecord" onClick={handleRecord}>
          Record Payment
        </button>
        <button className="ddcRemind">Remind To Pay</button>
      </div>
    </div>
  );
};

//Top Card To Record All Dues and ToTal Tenants
const DuesMainCard = ({ tenantCount, dues }) => {
  return (
    <div className="expenseMainCard">
      <div className="expenseMainTop">
        <div className="expenseDuration">Duration :</div>
        <div className="expenseMonth">
          <p>July</p>
        </div>
      </div>
      <div className="expenseTracker">
        <div
          className="trackerUnit"
          style={{ borderRight: "2px solid #f5f3f4" }}
        >
          <div className="trackerTop">
            <p>Rs {allDues(dues)}</p>
          </div>
          <div className="trackerTitle">
            <p>Total&nbsp; &nbsp; &nbsp; &nbsp;Dues</p>
            <img src="Assets/Tenant/edit.png" />
          </div>
        </div>
        <div className="trackerUnit">
          <div className="trackerTop">
            <p>{tenantCount}</p>
          </div>
          <div className="trackerTitle">
            <p>Total&nbsp; &nbsp; &nbsp; &nbsp; Tenants</p>
            <img src="Assets/Tenant/edit.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

//Pop Up To Add Collection
const DueCategory = ({ setOpen }) => {
  const tenant = useSelector((state) => state.tenant.selectedTenant);
  const [tenantFinance, setTenantFinance] = useState({
    id: tenant._id,
    amount: calculateTotalDues(tenant.dues),
    paymentDate: "2023-07-09",
    mode: "Cash",
  });
  const handleCross = () => {
    setOpen(false);
  };
  return (
    <div className="categoryMain">
      <div className="categoryCross">
        <img src="Assets/components/cross.png" onClick={handleCross} />
      </div>
      <div className="categoryContainer">
        <div className="categoryTitle">Record Payment</div>
        <div
          className="dueTenant"
          style={{
            width: "80%",
            marginLeft: "10%",
            position: "relative",
            top: "-20px",
          }}
        >
          <div className="ddcTop">
            <div className="ddcHead">
              <div className="ddcTitle">
                <p>{tenant.name}</p>
              </div>
              <div className="ddcDue">
                <p>Rs {tenant.dues ? calculateTotalDues(tenant.dues) : 0}</p>
              </div>
            </div>
            <div className="ddcHead">
              <div className="ddcRoom">
                <p>Ground 1</p>
              </div>
              <div className="ddcDueDate">
                <p>{tenant.doj}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="tenantAddSection">
          <p>Amount</p>
          <input type="text" value={tenantFinance.amount} readonly />
        </div>
        <div className="tenantAddSection">
          <p>Date Of Payment</p>
          <input type="text" value={tenantFinance.paymentDate} />
        </div>
        <div className="tenantAddSection">
          <p>Description</p>
          <input type="text" />
        </div>
        <div className="duePaymentMode">
          <div className="modeUnit modeActiveUnit">
            <img src="Assets/Payment/cash.png" />
            <p>Cash</p>
          </div>
          <div className="modeUnit">
            <img src="Assets/Payment/gpay.png" />
            <p>Gpay</p>
          </div>
          <div className="modeUnit">
            <img src="Assets/Payment/paytm.png" />
            <p>Paytm</p>
          </div>
          <div className="modeUnit">
            <img src="Assets/Payment/phonepe.png" />
            <p>PhonePe</p>
          </div>
        </div>
        <button className="dueButton">Record Payment</button>
      </div>
    </div>
  );
};
