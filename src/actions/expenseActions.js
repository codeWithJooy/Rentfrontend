import { SET_EXPENSE_CATEGORY } from "../actionTypes/expenseActionsType";
import { expenseApi } from "../apis/apis";
import { checkFloors } from "../validations/floorValidation";
import { dispatchAction, getHeaders } from "./actionHelper";
import { updateToast } from "./toastActions";
import { CodeAnalogy } from "../Components/Toasty/Toasty";
import { checkExpenses } from "../validations/expenseValidation";
export const setExpenseCategory = (data) => {
  return {
    type: SET_EXPENSE_CATEGORY,
    payload: data,
  };
};

export const addExpense = async (
  userId,
  propertyId,
  expenseName,
  amount,
  date,
  paidBy,
  paidTo,
  description,
  mode
) => {
  const val = {
    userId,
    propertyId,
    expenseName,
    amount,
    date,
    paidBy,
    paidTo,
    description,
    mode,
  };
  if(!checkExpenses(amount,paidTo)) return
  const res = await expenseApi.post("/addExpense", val);
  if (res.data.code == 200) {
    updateToast({
      code: CodeAnalogy.SUCCESS,
      title: "Expense Added",
      message: "Successfully Added Expense",
    });
    return true;
  } else {
    updateToast({
      code: CodeAnalogy.ERROR,
      title: "Something Went Wrong",
      message: "Couldn't Add Expense",
    });
    return false;
  }
};
export const getExpense = async (userId, propertyId) => {
  const headers = getHeaders({
    userId,
    propertyId,
  });
  const res = await expenseApi.get("/getExpense", headers);
  if (res.data.code == 200) {
    return res.data.model;
  } else {
    updateToast({
      code: CodeAnalogy.ERROR,
      title: "Something Went Wrong",
      message: "Couldn't Fetch Expense",
    });
  }
};
export const getMemName = async (userId, propertyId) => {
  try{
    const headers = getHeaders({
      userId,
      propertyId,
    });
    const res = await expenseApi.get("/getMemName", headers);
    if (res.data.code == 200) {
      return res.data.model
    } else {
      updateToast({
        code: CodeAnalogy.ERROR,
        title: "Something Went Wrong",
        message: "Couldn't Fetch Member Data",
      });
    }
  }catch(error){
    console.log(error.message)
  }
};
export const getTotaExpense = async (userId, propertyId) => {
  try{
    const headers = getHeaders({
      userId,
      propertyId,
    });
    const res = await expenseApi.get("/getTotalExpense", headers);
    if (res.data.code == 200) {
      return res.data.model
    } else {
      updateToast({
        code: CodeAnalogy.ERROR,
        title: "Something Went Wrong",
        message: "Couldn't Fetch Total Expenses",
      });
    }
  }catch(error){
    console.log(error.message)
  }
};
export const getExpenseCount = async (userId, propertyId) => {
  try{
    const headers = getHeaders({
      userId,
      propertyId,
    });
    const res = await expenseApi.get("/getExpenseCount", headers);
    if (res.data.code == 200) {
      return res.data.model
    } else {
      updateToast({
        code: CodeAnalogy.ERROR,
        title: "Something Went Wrong",
        message: "Couldn't Fetch ExpenseCount",
      });
    }
  }catch(error){
    console.log(error.message)
  }
};