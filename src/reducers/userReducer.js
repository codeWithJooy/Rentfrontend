import { act } from "react-dom/test-utils";
import {
  USER_LOGIN,
  USER_PROPERTY,
  USER_SIGNUP,
  ADD_EMAIL,
} from "../actionTypes/userAction";

const initialize = {
  userId: "",
  propertyId: "",
  propertyName: "",
  addEmail:""
};

const userReducer = (state = initialize, action) => {
  switch (action.type) {
    case USER_SIGNUP:
      return {
        ...state,
        userId: action.payload.userId,
        email: action.payload.email,
      };
    case USER_PROPERTY:
      return {
        ...state,
        userId: action.payload.userId,
        propertyId: action.payload.propertyId,
        propertyName: action.payload.propertyName,
        propertyCode: action.payload.propertyCode,
        pincode: action.payload.pincode,
        contact: action.payload.contact,
      };
    case USER_LOGIN:
      return {
        ...state,
        userId: action.payload.userId,
        propertyId: action.payload.propertyId,
        propertyName: action.payload.propertyName,
        propertyCode: action.payload.propertyCode,
        email: action.payload.email,
        pincode: action.payload.pincode,
        contact: action.payload.contact,
      };
    case ADD_EMAIL:{
      return{
        ...state,
        addEmail:action.payload.email
      }
    }
      default:
      return state;
  }
};

export default userReducer;
