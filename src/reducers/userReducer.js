import { USER_PROPERTY, USER_SIGNUP } from "../actionTypes/userAction";

const initialize = {
  userId: "",
  propertyId: "",
  propertyName: "",
};

const userReducer = (state = initialize, action) => {
  switch (action.type) {
    case USER_SIGNUP:
      return {
        ...state,
        userId: action.payload.userId,
      };
    case USER_PROPERTY:
      return {
        ...state,
        propertyId: action.payload.propertyId,
        propertyName: action.payload.propertyName,
      };
    default:
      return state;
  }
};

export default userReducer;
