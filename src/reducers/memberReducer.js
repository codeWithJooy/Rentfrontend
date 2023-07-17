import { SET_MEMBERS } from "../actionTypes/memberActionType";

const initial = {
  members: [],
};

const memberReducer = (state = initial, action) => {
  switch (action.type) {
    case SET_MEMBERS:
      return {
        ...state,
        members: action.payload,
      };
    default:
      return state;
  }
};

export default memberReducer;
