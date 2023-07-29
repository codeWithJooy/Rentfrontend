import {
  COMPLAINT_TYPE,
  CODE_NUMBER_CHECK,
} from "../actionTypes/studentActionType";

const initial = {
  complaintType: "",
  studentData: {},
};

const studentReducer = (state = initial, action) => {
  switch (action.type) {
    case COMPLAINT_TYPE:
      return {
        ...state,
        complaintType: action.payload,
      };
    case CODE_NUMBER_CHECK:
      return {
        ...state,
        studentData: action.payload,
      };
    default:
      return state;
  }
};

export default studentReducer;
