import { SET_ANN } from "../actionTypes/annActionType";

export const setAnn = (data) => {
  return {
    type: SET_ANN,
    payload: data,
  };
};
