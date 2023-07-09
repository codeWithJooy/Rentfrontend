import { SET_DUES_TYPE, SET_DUES_PAGE } from "../actionTypes/duesAction";

export const setDuesType = (data) => {
  return {
    type: SET_DUES_TYPE,
    payload: data,
  };
};

export const setDuesPage = (data) => {
  return {
    type: SET_DUES_PAGE,
    payload: data,
  };
};
