import {
  SET_DUES_TYPE,
  SET_DUES_PAGE,
  SET_DUE_TENANT,
  SET_DUE_ROOM,
} from "../actionTypes/duesAction";

const initial = {
  dueType: "",
  duePage: "add",
};

const dueReducer = (state = initial, action) => {
  switch (action.type) {
    case SET_DUES_TYPE:
      return {
        ...state,
        dueType: action.payload,
      };
    case SET_DUES_PAGE:
      return {
        ...state,
        duePage: action.payload,
      };
    case SET_DUE_ROOM: {
      return {
        ...state,
        dueSetData: action.payload,
      };
    }
    case SET_DUE_TENANT: {
      return {
        ...state,
        dueSetData: action.payload,
      };
    }
    default:
      return state;
  }
};

export default dueReducer;
