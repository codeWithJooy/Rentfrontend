import {
  TOTAL_FLOORS_ADDED,
  ROOMS_ADDED,
  FLOOR_SET,
} from "../actionTypes/floorActionsType";

/*
  floors: [
    {
      name: "Ground Floor",
      roomsType: {
        single: 0,
        double: 0,
        triple: 0,
      },
    },
  ],
*/
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
          {
            ...floor,
            roomsAdded: true,
            roomsType: {
              single: action.payload.roomsType.single,
              double: action.payload.roomsType.double,
              triple: action.payload.roomsType.triple,
            },
          },
        ],
      };
    case FLOOR_SET:
      return {
        ...state,
        selectedFloor: action.payload,
      };
    default:
      return state;
  }
};

export default floorReducer;
