import { SET_EXPENSE_CATEGORY } from "../actionTypes/expenseActionsType";

export const setExpenseCategory = (data) => {
  return {
    type: SET_EXPENSE_CATEGORY,
    payload: data,
  };
};
