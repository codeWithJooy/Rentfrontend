import {
  TOTAL_FLOORS_ADDED,
  ROOMS_ADDED,
} from "../actionTypes/floorActionsType";

export const setTotalFloors = (data) => {
  return {
    type: TOTAL_FLOORS_ADDED,
    payload: data,
  };
};
export const addRooms = (data) => {
  return {
    type: ROOMS_ADDED,
    payload: data,
  };
};
