import {
  SET_DUES_TYPE,
  SET_DUES_PAGE,
  SET_DUE_ROOM,
  SET_DUE_TENANT,
} from "../actionTypes/duesAction";

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

export const setDueRoom = (data) => {
  return {
    type: SET_DUE_ROOM,
    payload: data,
  };
};
export const setDueTenant = (data) => {
  return {
    type: SET_DUE_TENANT,
    payload: data,
  };
};
