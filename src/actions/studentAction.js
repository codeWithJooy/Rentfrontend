import { COMPLAINT_TYPE } from "../actionTypes/studentActionType";

export const setComplaintType = (data) => {
  return {
    type: COMPLAINT_TYPE,
    payload: data,
  };
};
