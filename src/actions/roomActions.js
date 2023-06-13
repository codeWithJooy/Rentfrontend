import { FLOOR_ROOMS_ADDED } from "../actionTypes/roomActionsType";

export const setRooms = (data) => {
  return {
    type: FLOOR_ROOMS_ADDED,
    payload: data,
  };
};
