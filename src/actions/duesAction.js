import { CodeAnalogy } from "../Components/Toasty/Toasty";
import {
  SET_DUES_TYPE,
  SET_DUES_PAGE,
  SET_DUE_ROOM,
  SET_DUE_TENANT,
} from "../actionTypes/duesAction";
import { duesApi } from "../apis/apis";
import { dispatchAction, getHeaders } from "./actionHelper";
import { updateToast } from "./toastActions";

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
export const addDuesRoom = async (userId, propertyId, roomId, data) => {
  try {
    const header = getHeaders({
      userId,
      propertyId,
      roomId,
    });
    const res = await duesApi.post("/addDuesRoom", data, header);
    if (res.data.code == 200) {
      updateToast({
        code: CodeAnalogy.SUCCESS,
        title: "Dues Added",
        message: "Successfully Added Dues",
      });
      return true;
    } else {
      updateToast({
        code: CodeAnalogy.ERROR,
        title: "Something Went Wrong",
        message: "Error While Adding Dues",
      });
      return true;
    }
  } catch (error) {
    console.log(error.message);
  }
};
export const addDuesTenant = async (userId, propertyId, tenantId, data) => {
  try {
    const header = getHeaders({
      userId,
      propertyId,
      tenantId,
    });
    const res = await duesApi.post("/addDuesTenant", data, header);
    if (res.data.code == 200) {
      updateToast({
        code: CodeAnalogy.SUCCESS,
        title: "Dues Added",
        message: "Successfully Added Dues",
      });
      return true;
    } else {
      updateToast({
        code: CodeAnalogy.ERROR,
        title: "Something Went Wrong",
        message: "Error While Adding Dues",
      });
      return true;
    }
  } catch (error) {
    console.log(error.message);
  }
};
export const getDuesTenant = async (userId, propertyId, tenantId) => {
  try {
    const header = getHeaders({
      userId,
      propertyId,
      tenantId,
    })
    const res = await duesApi.get("/getDuesTenant", header)
    if (res.data.code == 200) {
      dispatchAction(SET_DUE_TENANT, res.data.model)
    }
    else {
      updateToast({
        code: CodeAnalogy.ERROR,
        title: "Something Went Wrong",
        message: "Error Fetching Tenant Dues",
      })
    }
  } catch (error) {
    console.log(error)
  }
}
export const getDues = async (userId, propertyId) => {
  try {
    const header = getHeaders({
      userId,
      propertyId,
    })
    const res = await duesApi.get("/getDues", header)
    if (res.data.code == 200) {
      //dispatchAction(SET_DUE_TENANT, res.data.model)
      return res.data.model
    }
    else {
      updateToast({
        code: CodeAnalogy.ERROR,
        title: "Something Went Wrong",
        message: "Error Fetching Tenant Dues",
      })
    }
  } catch (error) {
    console.log(error)
  }
}