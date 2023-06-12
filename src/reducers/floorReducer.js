import {
  TOTAL_FLOORS_ADDED,
  ROOMS_ADDED,
} from "../actionTypes/floorActionsType";

const initial = {
  floorPresent: false,
};

const floorReducer = (state = initial, action) => {
  switch (action.type) {
    case TOTAL_FLOORS_ADDED:
      return {
        ...state,
        totalFloors: action.payload.totalFloors,
        floorPresent: true,
        floors: action.payload.floors,
      };
    case ROOMS_ADDED:
      const floor = state.floors.find((p) => p.name === action.payload.name);
      return {
        ...state,
        floors: [
          ...state.floors.filter((p) => p !== floor),
          { ...floor, roomsAdded: true, roomsType: action.payload.roomsType },
        ],
      };
    default:
      return state;
  }
};

export default floorReducer;
