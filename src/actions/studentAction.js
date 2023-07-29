import {
  COMPLAINT_TYPE,
  CODE_NUMBER_CHECK,
} from "../actionTypes/studentActionType";
import { dispatchAction, getHeaders } from "./actionHelper";
import { studentApi } from "../apis/apis";
import { updateToast } from "./toastActions";
import { CodeAnalogy } from "../Components/Toasty/Toasty";
export const setComplaintType = (data) => {
  return {
    type: COMPLAINT_TYPE,
    payload: data,
  };
};

export const checkCodeNumber = async (number, code) => {
  try {
    const headers = getHeaders({
      code,
      number,
    });
    const res = await studentApi.get("/checkCodeNumber", headers);
    if (res.data.code == 200) {
      dispatchAction(CODE_NUMBER_CHECK, res.data.model);
      return true;
    } else {
      updateToast({
        code: CodeAnalogy.ERROR,
        title: "Something Went Wrong",
        message: "Please make Sure code is correct.",
      });
      return false;
    }
  } catch (error) {
    console.log(error.message);
  }
};
