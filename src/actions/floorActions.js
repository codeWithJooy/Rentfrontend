import { TOTAL_FLOORS_ADDED } from "../actionTypes/floorActionsType";

export const setTotalFloors = (data) => {
  return {
    type: TOTAL_FLOORS_ADDED,
    payload: data,
  };
};
