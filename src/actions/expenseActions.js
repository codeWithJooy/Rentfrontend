import { SET_EXPENSE_CATEGORY } from "../actionTypes/expenseActionsType";
import { expenseApi } from "../apis/apis";
import { checkFloors } from "../validations/floorValidation";
import { dispatchAction, getHeaders } from "./actionHelper";
import { updateToast } from "./toastActions";
import { CodeAnalogy } from "../Components/Toasty/Toasty";
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
export const getExpense = async (userId, propertId) => {
  const headers = getHeaders({
    userId,
    propertId,
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
