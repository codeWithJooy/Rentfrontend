import { FLOOR_ROOMS_ADDED, SET_ROOM } from "../actionTypes/roomActionsType";

export const setRooms = (data) => {
  return {
    type: FLOOR_ROOMS_ADDED,
    payload: data,
  };
};
export const selectedRoom = (data) => {
  return {
    type: SET_ROOM,
    payload: data,
  };
};
