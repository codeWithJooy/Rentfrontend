import { SET_ANN } from "../actionTypes/annActionType";

const initial = {
  title: "",
  message: "",
};

const annReducer = (state = initial, action) => {
  switch (action.type) {
    case SET_ANN:
      return {
        ...state,
        title: action.payload.title,
        message: action.payload.message,
      };
    default:
      return state;
  }
};

export default annReducer;
