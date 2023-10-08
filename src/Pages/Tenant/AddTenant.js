import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTenant } from "../../actions/tenantAction";
import { useHistory } from "react-router-dom";
import "./Tenant.css";
import moment from "moment/moment";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import {
  calculateDue,
  generateLockIn,
  monthName,
  monthNameByDate,
} from "../../helper";
import Toast from "../../Components/Toast/Toast";
import { getAllRooms } from "../../actions/roomActions";
import { getReceiptId } from "../../actions/collectionAction";
const AddTenant = () => {
  const history = useHistory();
  const [rooms, setRooms] = useState([]);
  const [collection, setCollections] = useState([]);
  const [discount, setDiscount] = useState([]);
  const user = useSelector((state) => state.user);
  const [forceUpdate, setForceUpdate] = useState(true);
  const [toast, setToast] = useState(false);
  const [rent, setRent] = useState(rooms.length > 0 ? rooms[0].rate : 0);
  const [day, setDay] = useState({
    date: new Date().getDate(),
    month: monthName(new Date().getMonth()).name,
    maxDays: monthName(new Date().getMonth()).days,
  });
  const [currentDate, setCurrentDate] = useState(moment().format("YYYY-MM-DD"));
  const [rentEdit, setRentEdit] = useState(false);
  const [securityEdit, setSecurityEdit] = useState(false);
  const [tenant, setTenant] = useState({
    userId: user.userId,
    propertyId: user.propertyId,
    roomId: rooms.length > 0 ? rooms[0]._id : 0,
    name: "",
    number: "",
    room: rooms.length > 0 ? rooms[0].name : "",
    dob: currentDate,
  });
  const [tenantRentDue, setTenantRentDue] = useState({
    type: monthNameByDate(currentDate).name + " Rent",
    rent: rent,
    total: calculateDue(rent, day.date, day.maxDays),
    due: calculateDue(rent, day.date, day.maxDays),
    collection: 0,
    discount: 0,
    description: "",
    dueDate: currentDate,
  });
  const [tenantSecurityDue, setTenantSecurityDue] = useState({
    type: "Security Deposit",
    total: 0,
    due: 0,
    collection: 0,
    discount: 0,
    description: "",
    dueDate: currentDate,
  });
  const [lockin, setLocking] = useState("");
  const [lockinRents, setLockingRents] = useState([]);

  const handleLockin = (e) => {
    let val = e.target.value <= 12 ? e.target.value : 12;
    //val = val > 0 ? val : 0;
    setLocking(val);
    setLockingRents(generateLockIn(val, currentDate, tenantRentDue.rent));
  };
  const handleRentDueEdit = (e) => {
    let val = e.target.value >= 0 ? e.target.value : 0;
    let type = tenantRentDue.type;
    let due = tenantRentDue.due;
    let updatedCollection = collection.filter((unit) => unit.type != type);
    setCollections(updatedCollection);
    let updatedDis = discount.filter((unit) => unit.type != type);
    setDiscount(updatedDis);
    setTenantRentDue({
      ...tenantRentDue,
      rent: val,
      total: calculateDue(val, day.date, day.maxDays),
      due: calculateDue(val, day.date, day.maxDays),
      collection: 0,
      discount: 0,
    });
    setRent(val);
    setLockingRents(generateLockIn(lockin, currentDate, val));
  };

  //Handle To Open Rent Edit Page
  const handleRentEdit = () => {
    let type = tenantRentDue.type;
    let due = tenantRentDue.due;
    let updatedCollection = collection.filter((unit) => unit.type != type);
    setCollections(updatedCollection);
    let oldDisIndex = discount.findIndex((unit) => unit.type == type);
    if (oldDisIndex != -1) {
      setTenantRentDue({
        ...tenantRentDue,
        due: parseInt(due) + parseInt(discount[oldDisIndex].amount),
        collection: parseInt(due) + parseInt(discount[oldDisIndex].amount),
        discount: 0,
      });
    }
    let updatedDis = discount.filter((unit) => unit.type != type);
    setDiscount(updatedDis);
    setSecurityEdit(true);
    setRentEdit(false);
    setRentEdit(true);
    setSecurityEdit(false);
  };
  //Handle To Open Rent Edit Page
  const handleSecurityEdit = () => {
    let type = "Security Deposit";
    let due = tenantSecurityDue.due;
    let updatedCollection = collection.filter((unit) => unit.type != type);
    setCollections(updatedCollection);
    let oldDisIndex = discount.findIndex((unit) => unit.type == type);
    if (oldDisIndex != -1) {
      setTenantSecurityDue({
        ...tenantSecurityDue,
        due: parseInt(due) + parseInt(discount[oldDisIndex].amount),
        collection: parseInt(due) + parseInt(discount[oldDisIndex].amount),
        discount: 0,
      });
    }
    let updatedDis = discount.filter((unit) => unit.type != type);
    setDiscount(updatedDis);
    setSecurityEdit(true);
    setRentEdit(false);
  };
  const handleOnChange = (e) => {
    setTenant({
      ...tenant,
      [e.target.name]: e.target.value,
    });
  };

  //Room Change Handle
  const handleRoomChange = (e) => {
    let newRoom = rooms ? rooms.find((r) => r.name == e.target.value) : null;
    setTenant({
      ...tenant,
      room: e.target.value,
      roomId: newRoom._id,
    });

    setRent(newRoom.rate);
    let type = tenantRentDue.type;
    let updatedCollection = collection.filter((unit) => unit.type != type);
    setCollections(updatedCollection);
    let updatedDis = discount.filter((unit) => unit.type != type);
    setDiscount(updatedDis);
    setTenantRentDue({
      ...tenantRentDue,
      rent: newRoom.rate,
      total: calculateDue(newRoom.rate, day.date, day.maxDays),
      due: calculateDue(newRoom.rate, day.date, day.maxDays),
      collection: 0,
      discount: 0,
    });
    setLockingRents(generateLockIn(lockin, currentDate, newRoom.rate));
  };

  //Handle To Run In case of Date Change
  const onChangeDate = (e) => {
    const d = new Date(e.target.value);
    const newDate = moment(new Date(e.target.value)).format("YYYY-MM-DD");
    setDay({
      ...day,
      date: new Date(e.target.value).getDate(),
      month: monthName(new Date(e.target.value).getMonth()).name,
      maxDays: monthName(new Date(e.target.value).getMonth()).days,
    });
    let type = tenantRentDue.type;
    let updatedCollection = collection.filter((unit) => unit.type != type);
    setCollections(updatedCollection);
    let updatedDis = discount.filter((unit) => unit.type != type);
    setDiscount(updatedDis);
    setTenantRentDue({
      ...tenantRentDue,
      total: calculateDue(
        rent,
        new Date(e.target.value).getDate(),
        monthName(new Date(e.target.value).getMonth()).days
      ),
      due: calculateDue(
        rent,
        new Date(e.target.value).getDate(),
        monthName(new Date(e.target.value).getMonth()).days
      ),
      dueDate: newDate,
      type: monthNameByDate(new Date(e.target.value)).name + " Rent",
      collection: 0,
      discount: 0,
    });
    setTenantSecurityDue({
      ...tenantSecurityDue,
      dueDate: newDate,
    });

    setCurrentDate(newDate);
    setTenant({
      ...tenant,
      dob: newDate,
    });

    setLockingRents(
      generateLockIn(lockin, new Date(e.target.value), tenantRentDue.rent)
    );
  };

  //handler to run security due change
  const handleSecurityDueEdit = (e) => {
    let val = e.target.value >= 0 ? e.target.value : 0;
    let type = "Security Deposit";
    let due = tenantSecurityDue.due;
    let updatedCollection = collection.filter((unit) => unit.type != type);
    setCollections(updatedCollection);
    let updatedDis = discount.filter((unit) => unit.type != type);
    setDiscount(updatedDis);
    setTenantSecurityDue({
      ...tenantSecurityDue,
      total: val,
      due: val,
      collection: 0,
      discount: 0,
    });
  };

  const handleAdd = () => {
    let obj = {};
    obj = tenant;
    obj.dues = [];
    obj.dues.push(tenantRentDue);
    for (let i = 0; i < lockinRents.length; i++) {
      obj.dues.push(lockinRents[i]);
    }
    obj.dues.push(tenantSecurityDue);
    obj.collections = collection;
    obj.discounts = discount;

    (async () => {
      if (await addTenant(obj)) {
        setTimeout(() => {
          history.push("/tenant");
        }, 2000);
      }
    })();
  };
  useEffect(() => {
    if (forceUpdate) {
      (async () => {
        let data = await getAllRooms(user.userId, user.propertyId);
        setRooms(data);
        setTenant({
          ...tenant,
          room: data ? data[0].name : "Unknown",
          roomId: data ? data[0]._id : "0",
        });

        setRent(data ? data[0].rate : 0);
        setTenantRentDue({
          ...tenantRentDue,
          rent: data ? data[0].rate : 0,
          total: calculateDue(data ? data[0].rate : 0, day.date, day.maxDays),
          due: calculateDue(data ? data[0].rate : 0, day.date, day.maxDays),
        });
        setForceUpdate(false);
      })();
    }
  }, [rooms]);
  if (rooms.length > 0) {
    return (
      <div className="tenantMain">
        <Header name="Add Tenant" link="/tenant" type="back" />
        <div className="tenantSection">
          <div className="tenantInput">
            <p>Tenant Name</p>
            <input type="text" name="name" onChange={handleOnChange} />
          </div>
          <div className="tenantInput">
            <p>Phone Number</p>
            <input type="number" name="number" onChange={handleOnChange} />
          </div>
          <div className="tenantInput">
            <p>Tenant Room</p>
            <select name="room" value={tenant.room} onChange={handleRoomChange}>
              {rooms.map((unit, index) => (
                <option key={index} value={unit.name}>
                  {unit.name}
                </option>
              ))}
            </select>
          </div>
          <div className="tenantInput">
            <p>Date of Booking</p>
            <input type="date" value={currentDate} onChange={onChangeDate} />
          </div>
          <div className="tenantAddHalf">
            <div className="tenantAddLeftSection">
              <p>Room Rent</p>
              <input
                type="number"
                value={tenantRentDue.rent}
                onChange={handleRentDueEdit}
              />
            </div>
            <div className="tenantAddRightSection">
              <p>Security Deposit</p>
              <input
                type="number"
                value={tenantSecurityDue.total}
                onChange={handleSecurityDueEdit}
              />
            </div>
          </div>
          <div className="tenantInput">
            <p>Locking Period in Months(optional)</p>
            <input type="number" value={lockin} onChange={handleLockin} />
          </div>
          <div className="tenantBalanceHeader">
            <p>Opening Balance of Tenant</p>
          </div>
          <div className="tenantBalanceSection">
            <div className="section">
              <div className="sectionUnitHeader">Dues Type</div>
              <div className="sectionUnitHeader">Due</div>
              <div className="sectionUnitHeader">Collected</div>
            </div>
            <div className="section">
              <div className="sectionUnit unitMain">Security Deposit</div>
              <div className="sectionUnit">
                <p className="rate">Rs {tenantSecurityDue.due}</p>
                <p className="range">One-Time</p>
              </div>
              <div className="sectionUnit collected">
                <img
                  src="Assets/Tenant/edit.png"
                  onClick={handleSecurityEdit}
                />
                <p>{tenantSecurityDue.collection}</p>
              </div>
            </div>
            <div className="section">
              <div className="sectionUnit unitMain">{tenantRentDue.type}</div>
              <div className="sectionUnit">
                <p className="rate">Rs {tenantRentDue.due}</p>
                <p className="range">
                  {day.date} {day.month} to {day.maxDays} {day.month}
                </p>
              </div>
              <div className="sectionUnit collected">
                <img src="Assets/Tenant/edit.png" onClick={handleRentEdit} />
                <p>{tenantRentDue.collection}</p>
              </div>
            </div>
            {lockinRents &&
              lockinRents.length > 0 &&
              lockinRents.map((data, val) => (
                <div className="section">
                  <div className="sectionUnit unitMain">{data.type}</div>
                  <div className="sectionUnit">
                    <p className="rate">Rs {data.due}</p>
                    <p className="range">{`Due ${data.dueDate}`}</p>
                  </div>
                  {/* <div className="sectionUnit collected">
                    <img src="Assets/Tenant/edit.png" />
                    <p>{data.collection}</p>
                  </div> */}
                </div>
              ))}

            <div className="tenantButton">
              <button onClick={handleAdd}>Add Tenant</button>
            </div>
          </div>
        </div>
        <Footer page={"Tenants"} />
        {rentEdit && (
          <TenantPayment
            setEdit={setRentEdit}
            data={tenantRentDue}
            setData={setTenantRentDue}
            collection={collection}
            setCollections={setCollections}
            discount={discount}
            setDiscount={setDiscount}
          />
        )}
        {securityEdit && (
          <TenantPayment
            setEdit={setSecurityEdit}
            data={tenantSecurityDue}
            collection={collection}
            discount={discount}
            setData={setTenantSecurityDue}
            setCollections={setCollections}
            setDiscount={setDiscount}
          />
        )}
        <Toast
          toast={toast}
          setToast={setToast}
          setDue={setTenantRentDue}
          title={"Tenant Added"}
          msg={"Tenant Added Successfully"}
        />
      </div>
    );
  } else return <></>;
};

export default AddTenant;

const TenantPayment = ({
  setEdit,
  data,
  setData,
  setCollections,
  setDiscount,
  collection,
  discount,
}) => {
  const { type, due, dueDate } = data;

  const [dummyDue, setDummyDue] = useState(due);
  const [pay, setPayment] = useState({
    type: type,
    amount: due,
    date: moment(new Date(dueDate)).format("YYYY-MM-DD"),
    mode: "Cash",
    receiptId: "0",
    openingDue: due,
  });
  const [newDis, setNewDis] = useState({
    type: type,
    amount: 0,
    date: moment(new Date(dueDate)).format("YYYY-MM-DD"),
  });
  const handleSave = () => {
    if (pay.amount > 0) {
      setCollections((collection) => [...collection, pay]);
    }
    if (newDis.amount > 0) {
      setDiscount((discount) => [...discount, newDis]);
    }
    setData({
      ...data,
      due: dummyDue,
      collection: pay.amount,
      discount: newDis.amount,
    });
    setEdit(false);
  };
  const handleDateChange = (e) => {
    const newDate = moment(new Date(e.target.value)).format("YYYY-MM-DD");
    setPayment({
      ...pay,
      date: newDate,
    });
    setNewDis({
      ...newDis,
      date: newDate,
    });
  };
  const handlePaymentChange = (e) => {
    let value = e.target.value;
    if (parseInt(value) < 0) {
      value = 0;
    }
    if (value > due - newDis.amount) {
      value = due - newDis.amount;
    }
    setPayment({
      ...pay,
      [e.target.name]: value,
    });
    setData({ ...data, collection: value });
  };

  const handleDiscountChange = (e) => {
    let value = e.target.value;
    if (parseInt(value) < 0) {
      value = 0;
    }
    if (parseInt(value) > parseInt(due)) {
      value = due;
    }
    if (value == "") {
      setNewDis({
        ...newDis,
        amount: 0,
      });
    }
    setDummyDue(due - value);
    //setData({ ...data, discount: value, collection: due - value });

    setNewDis({
      ...newDis,
      amount: value,
    });
    setPayment({
      ...pay,
      amount: due - value,
      openingDue: due - value,
    });
  };
  const { userId, propertyId, propertyName } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    (async () => {
      let receiptIdData = await getReceiptId(
        userId,
        propertyId,
        propertyName,
        type,
        pay.date
      );
      setPayment({ ...pay, receiptId: receiptIdData });
    })();
  }, [pay.date]);
  return (
    <div className="categoryMain">
      <div className="categoryCross">
        <img src="Assets/components/cross.png" onClick={() => setEdit(false)} />
      </div>
      <div className="categoryContainer">
        <div className="categoryTitle">{type}</div>
        <div className="tenantInput">
          <p>Due Amount</p>
          <input type="text" value={dummyDue} readOnly />
        </div>
        <div className="tenantInput">
          <p>Discount</p>
          <input
            type="text"
            value={newDis.amount}
            onChange={handleDiscountChange}
          />
        </div>
        <div className="tenantInput">
          <p>Collection</p>
          <input
            type="text"
            value={pay.amount}
            name="amount"
            onChange={handlePaymentChange}
          />
        </div>
        {/* <div className="tenantInput">
          <p>Description</p>
          <input
            type="text"
            value={pay.description}
            name="description"
            onChange={handlePaymentChange}
          />
        </div> */}
        <div className="tenantInput">
          <p>Payment Date</p>
          <input type="date" value={pay.date} onChange={handleDateChange} />
        </div>
        <div className="paymentMode">
          <p>Payment Mode</p>
          <div className="paymentHolder">
            <div
              className={`paymentUnits ${pay.mode == "Cash" ? "paymentActive" : ""
                }`}
              onClick={() => setPayment({ ...pay, mode: "Cash" })}
            >
              <img src="Assets/Payment/cash.png" />
              <p>Cash</p>
            </div>
            <div
              className={`paymentUnits ${pay.mode == "Gpay" ? "paymentActive" : ""
                }`}
              onClick={() => setPayment({ ...pay, mode: "Gpay" })}
            >
              <img src="Assets/Payment/gpay.png" />
              <p>GPay</p>
            </div>
            <div
              className={`paymentUnits ${pay.mode == "PhonePe" ? "paymentActive" : ""
                }`}
              onClick={() => setPayment({ ...pay, mode: "PhonePe" })}
            >
              <img src="Assets/Payment/phonepe.png" />
              <p>PhonePe</p>
            </div>
            <div
              className={`paymentUnits ${pay.mode == "Paytm" ? "paymentActive" : ""
                }`}
              onClick={() => setPayment({ ...pay, mode: "Paytm" })}
            >
              <img src="Assets/Payment/paytm.png" />
              <p>Paytm</p>
            </div>
          </div>
        </div>
        <div className="tenantButton">
          <button style={{ width: "90%", margin: "5%" }} onClick={handleSave}>
            Add Collection
          </button>
        </div>
      </div>
    </div>
  );
};
