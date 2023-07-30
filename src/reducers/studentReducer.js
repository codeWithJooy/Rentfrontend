import {
  COMPLAINT_TYPE,
  CODE_NUMBER_CHECK,
  SET_STUDENT_PAYMENT_DETAILS,
} from "../actionTypes/studentActionType";

const initial = {
  complaintType: "",
  studentData: {},
  studentPayment: {},
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
    case SET_STUDENT_PAYMENT_DETAILS:
      return {
        ...state,
        studentPayment: action.payload,
      };
    default:
      return state;
  }
};

export default studentReducer;
