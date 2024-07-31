import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Expense.css";
import { addExpense, getMemName } from "../../actions/expenseActions";
import moment from "moment/moment";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useHistory } from "react-router-dom";

const ExpenseDetails = () => {
  const category = useSelector((state) => state.expense.category);
  const [members,setMembers]=useState([])
  const user = useSelector((state) => state.user);
  const [imageSrc, setImageSrc] = useState('');
  const [hasImage, setHasImage] = useState(false);
  const [imageFile, setImageFile] = useState(null);

  const [expense, setExpense] = useState({
    userId: user.userId,
    propertyId: user.propertyId,
    expenseName: category.title,
    amount: 0,
    date: moment().format("YYYY-MM-DD"),
    paidBy: "",
    paidTo: "",
    description: "",
    mode: "Cash",
  });
 

  const history = useHistory();

  //For Getting Input Data
  const handleChange = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  //For Handling Date
  const handleDate = (e) => {
    const newDate = moment(new Date(e.target.value)).format("YYYY-MM-DD");
    setExpense({
      ...expense,
      date: newDate,
    });
  };

  //For Handling Adding Data To Server
  const handleAdd = async () => {
    const formData = new FormData();
    formData.append('userId', expense.userId);
    formData.append('propertyId', expense.propertyId);
    formData.append('expenseName', expense.expenseName);
    formData.append('amount', expense.amount);
    formData.append('date', expense.date);
    formData.append('paidBy', expense.paidBy);
    formData.append('paidTo', expense.paidTo);
    formData.append('description', expense.description);
    formData.append('mode', expense.mode);
    if (imageFile) {
      formData.append('file', imageFile); // Append the image file to the form data
    }

    const response = await addExpense(formData); // Assume addExpense is modified to handle form data
    if (response) {
      history.push('/expense');
    }
  };
 
  //For Handling Image Upload
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setImageSrc(e.target.result);
      setHasImage(true);
      setImageFile(file)
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  useEffect(()=>{
   (async()=>{
    let data=await getMemName(user.userId,user.propertyId)
    setMembers(data)
    setExpense({...expense,paidBy:data && data[0]?data[0]:""})
   })()
  },[])
  return (
    <div className="expenseMain">
      <Header name={"Add Expense"} type="back" link="/expense" />
      <div className="pageHeader">
        <img src={category.img} />
        <p>{category.title}</p>
      </div>
      <div className="expenseHolder">
        <div className="expenseAddSection">
          <p>Amount</p>
          <input
            type="number"
            name="amount"
            value={expense.amount}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="expenseHolder">
        <div className="expenseAddSection">
          <p>Date</p>
          <input type="date" value={expense.date} onChange={handleDate} />
        </div>
      </div>
      <div className="expenseHolder">
        <div className="expenseAddSection">
          <p>Paid By</p>
          <select name="paidBy" value={expense.paidBy} onChange={handleChange}>
            {
              members && members.length > 0 &&
              members.map((data,key)=>(
                <option key={key} value={data}>
                  {data}
                </option>
              ))
            }
          </select>
        </div>
      </div>
      <div className="expenseHolder">
        <div className="expenseAddSection">
          <p>Paid To</p>
          <input
            type="text"
            name="paidTo"
            value={expense.paidTo}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="expenseHolder">
        <div className="expenseAddSection">
          <p>Description</p>
          <input
            type="text"
            name="description"
            value={expense.description}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="expenseHolder">
      <div
      className="expenseBill"
      onClick={() => document.getElementById('fileInput').click()}
      style={{
        backgroundImage: `url(${imageSrc})`}}
    >
      {!hasImage && (
        <span
          style={{
            position: 'absolute',
            color: '#666',
            fontSize: '16px'
          }}
        >
          Add bill/document
        </span>
      )}
      <input
        type="file"
        id="fileInput"
        style={{ display: 'none' }}
        accept="image/*"
        onChange={handleFileChange}
      />
    </div>
      </div>
      <div className="paymentMode">
        <p>Payment Mode</p>
        <div className="paymentHolder">
          <div className={`paymentUnits ${expense.mode=="Cash"?"paymentActive":""}`} onClick={()=>setExpense({...expense,mode:"Cash"})}>
            <img src="Assets/Payment/cash.png" />
            <p>Cash</p>
          </div>
          <div className={`paymentUnits ${expense.mode=="Gpay"?"paymentActive":""}`} onClick={()=>setExpense({...expense,mode:"Gpay"})}>
            <img src="Assets/Payment/gpay.png" />
            <p>GPay</p>
          </div>
          <div className={`paymentUnits ${expense.mode=="PhonePe"?"paymentActive":""}`} onClick={()=>setExpense({...expense,mode:"PhonePe"})}>
            <img src="Assets/Payment/phonepe.png" />
            <p>PhonePe</p>
          </div>
          <div className={`paymentUnits ${expense.mode=="Paytm"?"paymentActive":""}`} onClick={()=>setExpense({...expense,mode:"Paytm"})}>
            <img src="Assets/Payment/paytm.png" />
            <p>Paytm</p>
          </div>
        </div>
      </div>
      <div className="expenseHolder">
        <button className="expenseButton" onClick={handleAdd}>
          Add Expense
        </button>
      </div>
    </div>
  );
};

export default ExpenseDetails;
