import { COMPLAINT_TYPE } from "../actionTypes/studentActionType";

const initial = {
  complaintType: "",
};

const studentReducer = (state = initial, action) => {
  switch (action.type) {
    case COMPLAINT_TYPE:
      return {
        ...state,
        complaintType: action.payload,
      };
    default:
      return state;
  }
};

export default studentReducer;
