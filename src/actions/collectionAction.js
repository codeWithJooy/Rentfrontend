import {
  SET_TENANT_COLLECTION,
  SET_ALL_COLLECTION,
} from "../actionTypes/collectionType";
import { updateToast } from "./toastActions";
import { CodeAnalogy } from "../Components/Toasty/Toasty";
import { tenantApi, collectionApi } from "../apis/apis";
import { getHeaders, dispatchAction } from "./actionHelper";

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
      dispatchAction(SET_ALL_COLLECTION, res.data.code);
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
