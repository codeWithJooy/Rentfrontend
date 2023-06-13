import { FLOOR_ROOMS_ADDED } from "../actionTypes/roomActionsType";

const initial = {
  rooms: [],
};

const roomReducer = (state = initial, action) => {
  switch (action.type) {
    case FLOOR_ROOMS_ADDED:
      return {
        ...state,
        rooms: [...state.rooms, ...action.payload],
      };
    default:
      return state;
  }
};

export default roomReducer;
