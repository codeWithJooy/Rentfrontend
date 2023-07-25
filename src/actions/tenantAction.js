import {
  SET_TENANT,
  TENANT_ADDED,
  SET_TENANT_DATA,
  SET_SINGLE_TENANT,
} from "../actionTypes/tenantActionsType";
import { updateToast } from "./toastActions";
import { CodeAnalogy } from "../Components/Toasty/Toasty";
import { tenantApi, collectionApi } from "../apis/apis";
import { getHeaders, dispatchAction } from "./actionHelper";
import { addTenantValidation } from "../validations/tenantValidation";
export const addTenant = async (data) => {
  try {
    if (!addTenantValidation(data)) return false;

    const res = await tenantApi.post("/addTenant", data);
    if (res.data.code == 200) {
      updateToast({
        code: CodeAnalogy.SUCCESS,
        title: "Tenant Added",
        message: "Tenant added Successfully",
      });
      return true;
    } else if (res.data.code == 403) {
      updateToast({
        code: CodeAnalogy.ERROR,
        title: "Tenant Present",
        message: "Tenant Present Already",
      });
      return false;
    } else {
      updateToast({
        code: CodeAnalogy.ERROR,
        title: "Something Went Wrong",
        message: "Error Adding Tenant",
      });
      return;
    }
  } catch (error) {
    console.log(error);
  }
};
export const getTenants = async (userId, propertyId) => {
  const header = getHeaders({
    userId,
    propertyId,
  });
  const res = await tenantApi.get("/getTenants", header);
  if (res.data.code == 200) {
    return res.data.model;
  } else {
    updateToast({
      code: CodeAnalogy.ERROR,
      title: "Something Went Wrong",
      message: "Error While Fetching Tenant",
    });
    return;
  }
};
export const getTenantName = async (userId, propertyId, tenantId) => {
  try {
    const header = getHeaders({
      userId,
      propertyId,
      tenantId,
    });
    const res = await tenantApi.get("/getTenantName", header);
    if (res.data.code == 200) {
      return res.data.model;
    } else {
      updateToast({
        code: CodeAnalogy.ERROR,
        title: "Something Went Wrong",
        message: "Error While Fetching Tenant Name",
      });
      return;
    }
  } catch (error) {
    console.log(error);
  }
};
export const getTenantsCount = async (userId, propertyId) => {
  const header = getHeaders({
    userId,
    propertyId,
  });
  const res = await tenantApi.get("/getTenants", header);
  if (res.data.code == 200) {
    return res.data.model.length;
  } else {
    updateToast({
      code: CodeAnalogy.ERROR,
      title: "Something Went Wrong",
      message: "Error While Fetching Tenant",
    });
    return;
  }
};
export const getATenant = async (userId, propertyId, tenantId) => {
  const headers = getHeaders({
    userId,
    propertyId,
    tenantId,
  });
  const res = await tenantApi.get("/getATenant", headers);
  if (res.data.code == 200) {
    dispatchAction(SET_SINGLE_TENANT, res.data.model);
  }
};
export const getRoomTenants = async (userId, propertyId, roomId) => {
  try {
    const headers = getHeaders({
      userId,
      propertyId,
      roomId,
    });
    const res = await tenantApi.get("/getTenantCount", headers);
    if (res.data.code == 200) {
      return res.data.model;
    } else {
      updateToast({
        code: CodeAnalogy.ERROR,
        title: "Error Fetching Tenants",
      });
      return 0;
    }
  } catch (error) {
    console.log(error.message);
  }
};
export const getAllTenantsCount = async (userId, propertyId) => {
  try {
    const headers = getHeaders({
      userId,
      propertyId,
    });
    const res = await tenantApi.get("/getAllTenantsCount", headers);
    if (res.data.code == 200) {
      return res.data.model;
    } else {
      updateToast({
        code: CodeAnalogy.ERROR,
        title: "Error Fetching Tenants Count",
      });
      return 0;
    }
  } catch (error) {
    console.log(error.message);
  }
};
export const setTenant = (data) => {
  return {
    type: SET_TENANT,
    payload: data,
  };
};
