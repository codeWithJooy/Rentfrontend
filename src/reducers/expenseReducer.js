import { act } from "react-dom/test-utils";
import { SET_EXPENSE_CATEGORY } from "../actionTypes/expenseActionsType";

const initial = {};

const expenseReducer = (state = initial, action) => {
  switch (action.type) {
    case SET_EXPENSE_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    default:
      return state;
  }
};

export default expenseReducer;
