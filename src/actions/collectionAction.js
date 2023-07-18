import {
  SET_TENANT_COLLECTION,
  SET_ALL_COLLECTION,
  SET_TENANT_DISCOUNT,
} from "../actionTypes/collectionType";
import { updateToast } from "./toastActions";
import { CodeAnalogy } from "../Components/Toasty/Toasty";
import { tenantApi, collectionApi } from "../apis/apis";
import { getHeaders, dispatchAction } from "./actionHelper";

export const addCollection = async (
  userId,
  propertyId,
  tenantId,
  type,
  amount,
  date,
  mode
) => {
  try {
    console.log("Type is ", type);
    const headers = getHeaders({
      userId,
      propertyId,
      tenantId,
    });
    const data = {
      type,
      amount,
      date,
      mode,
    };
    const res = await collectionApi.post("/addCollection", data, headers);
    if (res.data.code == 200) {
      updateToast({
        code: CodeAnalogy.SUCCESS,
        title: "Payment Added",
        message: "Payment Done Successfully",
      });
      return true;
    } else {
      updateToast({
        code: CodeAnalogy.ERROR,
        title: "Something Went Wrong",
        message: "Cannot Process payment",
      });
    }
  } catch (error) {
    console.log(error);
  }
};
export const getTenantCollection = async (userId, propertyId, tenantId) => {
  try {
    const headers = getHeaders({
      userId,
      propertyId,
      tenantId,
    });
    const res = await collectionApi.get("/getCollection", headers);
    if (res.data.code == 200) {
      dispatchAction(SET_TENANT_COLLECTION, res.data.model);
    } else {
      updateToast({
        code: CodeAnalogy.ERROR,
        title: "Something Went Wrong",
        message: "Error Fetching Tenant Collections",
      });
    }
  } catch (error) {
    console.log(error);
  }
};
export const getAllCollections = async (userId, propertyId) => {
  try {
    const headers = getHeaders({
      userId,
      propertyId,
    });
    const res = await collectionApi.get("/getAllCollection", headers);
    if (res.data.code == 200) {
      dispatchAction(SET_ALL_COLLECTION, res.data.model);
      return res.data.model;
    } else {
      updateToast({
        code: CodeAnalogy.ERROR,
        title: "Something Went Wrong",
        message: "Error Fetching Tenants Collections",
      });
    }
  } catch (error) {
    console.log(error);
  }
};
export const getTenantDiscount = async (userId, propertyId, tenantId) => {
  try {
    const headers = getHeaders({
      userId,
      propertyId,
      tenantId,
    });
    const res = await collectionApi.get("/getDiscount", headers);
    if (res.data.code == 200) {
      dispatchAction(SET_TENANT_DISCOUNT, res.data.model);
    } else {
      updateToast({
        code: CodeAnalogy.ERROR,
        title: "Something Went Wrong",
        message: "Error Fetching Tenant Discounts",
      });
    }
  } catch (error) {
    console.log(error);
  }
};
