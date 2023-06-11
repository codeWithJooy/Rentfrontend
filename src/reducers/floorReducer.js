import { TOTAL_FLOORS_ADDED } from "../actionTypes/floorActionsType";

const initial = {
  floorPresent: false,
};

const floorReducer = (state = initial, action) => {
  switch (action.type) {
    case TOTAL_FLOORS_ADDED:
      return {
        ...state,
        totalFloors: action.payload,
        floorPresent: true,
      };
    default:
      return state;
  }
};

export default floorReducer;
