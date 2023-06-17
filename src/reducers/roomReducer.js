import {
  FLOOR_ROOMS_ADDED,
  SET_ROOM,
  ROOM_UPDATE,
} from "../actionTypes/roomActionsType";

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
    case SET_ROOM:
      return {
        ...state,
        selectedRoom: action.payload,
      };
    case ROOM_UPDATE:
      const room = state.rooms.find((p) => p.name === action.payload.name);
      return {
        ...state,
        rooms: [
          ...state.rooms.filter((p) => p !== room),
          {
            ...room,
            name: action.payload.title,
            rate: action.payload.rent,
          },
        ],
      };
    default:
      return state;
  }
};

export default roomReducer;
