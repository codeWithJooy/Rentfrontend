import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getReceiptId } from "../../actions/collectionAction";
import moment from "moment";
import { addCollection } from "../../actions/collectionAction";
//Pop Up To Add Collection
const DuesCollection = ({ setOpenCategory, data, setForceUpdate }) => {
  const tenantId = useSelector((state) => state.tenant.selectedTenant);
  const { userId, propertyId, propertyName } = useSelector(
    (state) => state.user
  );

  const handleCross = () => {
    setOpenCategory(false);
  };
  const [collection, setCollection] = useState({
    userId,
    propertyId,
    tenantId,
    type: data.type,
    amount: data.finalDue,
    discount: 0,
    date: moment(new Date()).format("YYYY-MM-DD"),
    mode: "Cash",
    receiptId: "",
  });
  const [dummyData, setDummyData] = useState(data.finalDue);

  const handlePayment = () => {
    addCollection(
      collection.userId,
      collection.propertyId,
      collection.tenantId,
      collection.type,
      collection.amount,
      collection.date,
      collection.mode,
      collection.discount,
      collection.receiptId
    );
    setForceUpdate(true);
    setOpenCategory(false);
  };
  const handleAmount = (e) => {
    let amt = e.target.value;
    if (amt > data.finalDue) {
      amt = data.finalDue;
    }
    setCollection({
      ...collection,
      amount: amt,
    });
  };
  const handleDiscount = (e) => {
    let val = e.target.value;
    if (val > data.finalDue) {
      val = data.finalDue;
    }
    setDummyData(data.finalDue - val);
    setCollection({
      ...collection,
      discount: val,
      amount: data.finalDue - val,
    });
  };
  const handleTime = (e) => {
    const newDate = moment(new Date(e.target.value)).format("YYYY-MM-DD");
    setCollection({
      ...collection,
      date: newDate,
    });
  };
  useEffect(() => {
    (async () => {
      let receiptData = await getReceiptId(
        userId,
        propertyId,
        propertyName,
        data.type,
        collection.date
      );
      setCollection({ ...collection, receiptId: receiptData });
    })();
  }, [collection.date]);
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
                <p>{data.type}</p>
              </div>
              <div className="ddcDue">
                <p>Rs {dummyData}</p>
              </div>
            </div>
            <div className="ddcHead">
              <div className="ddcRoom">
                <p>Room Name</p>
              </div>
              <div className="ddcDueDate">
                <p>{data.dueDate}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="tenantAddSection">
          <p>Discount</p>
          <input
            type="text"
            value={collection.discount}
            onChange={handleDiscount}
          />
        </div>
        <div className="tenantAddSection">
          <p>Amount</p>
          <input
            type="text"
            value={collection.amount}
            onChange={handleAmount}
          />
        </div>
        <div className="tenantAddSection">
          <p>Date Of Payment</p>
          <input type="date" value={collection.date} onChange={handleTime} />
        </div>
        <div className="tenantAddSection">
          <p>Description</p>
          <input type="text" />
        </div>
        <div className="paymentMode">
          <p>Payment Mode</p>
          <div className="paymentHolder">
            <div
              className={`paymentUnits ${
                collection.mode == "Cash" ? "paymentActive" : ""
              }`}
              onClick={() => setCollection({ ...collection, mode: "Cash" })}
            >
              <img src="Assets/Payment/cash.png" />
              <p>Cash</p>
            </div>
            <div
              className={`paymentUnits ${
                collection.mode == "Gpay" ? "paymentActive" : ""
              }`}
              onClick={() => setCollection({ ...collection, mode: "Gpay" })}
            >
              <img src="Assets/Payment/gpay.png" />
              <p>GPay</p>
            </div>
            <div
              className={`paymentUnits ${
                collection.mode == "PhonePe" ? "paymentActive" : ""
              }`}
              onClick={() => setCollection({ ...collection, mode: "PhonePe" })}
            >
              <img src="Assets/Payment/phonepe.png" />
              <p>PhonePe</p>
            </div>
            <div
              className={`paymentUnits ${
                collection.mode == "Paytm" ? "paymentActive" : ""
              }`}
              onClick={() => setCollection({ ...collection, mode: "Paytm" })}
            >
              <img src="Assets/Payment/paytm.png" />
              <p>Paytm</p>
            </div>
          </div>
        </div>
        <button className="dueButton" onClick={handlePayment}>
          Record Payment
        </button>
      </div>
    </div>
  );
};

export default DuesCollection;
