import { memberApi } from "../apis/apis";
import { dispatchAction, getHeaders } from "./actionHelper";
import { updateToast } from "./toastActions";
import { CodeAnalogy } from "../Components/Toasty/Toasty";
import { SET_MEMBERS } from "../actionTypes/memberActionType";

export const getMembers = async (userId, propertyId) => {
  try {
    const headers = getHeaders({
      userId,
      propertyId,
    });

    const res = await memberApi.get("/getMembers", headers);
    if (res.data.code == 200) {
      dispatchAction(SET_MEMBERS, res.data.model);
      return res.data.model;
    } else {
      updateToast({
        code: CodeAnalogy.ERROR,
        title: "Something Went Wrong",
        message: "Error Fetching Member Data",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const addMember = async (
  userId,
  propertyId,
  name,
  phone,
  designation,
  doj
) => {
  try {
    const headers = getHeaders({
      userId,
      propertyId,
    });
    const data = {
      name,
      phone,
      doj,
      designation,
    };
    const res = await memberApi.post("/addMember", data, headers);
    if (res.data.code == 200) {
      updateToast({
        code: CodeAnalogy.SUCCESS,
        title: "Member Added Sucessfully",
        message: "Successfully Added Member",
      });
      return true;
    } else {
      updateToast({
        code: CodeAnalogy.ERROR,
        title: "Something Went Wrong",
        message: "Error Uploading Member Data",
      });
      return false;
    }
  } catch (error) {
    console.log(error.message);
  }
};
