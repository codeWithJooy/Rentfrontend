import { TENANT_ADDED } from "../actionTypes/tenantActionsType";
import { updateToast } from "./toastActions";
import { CodeAnalogy } from "../Components/Toasty/Toasty";
import { tenantApi } from "../apis/apis";
import { getHeaders } from "./actionHelper";
export const addTenant = async (data) => {
  try {
    const res = await tenantApi.post("/addTenant", data);
    if (res.data.code == 200) {
      updateToast({
        code: CodeAnalogy.SUCCESS,
        title: "Tenant Added",
        message: "Tenant added Successfully",
      });
      return;
    } else if (res.data.code == 404) {
      updateToast({
        code: CodeAnalogy.ERROR,
        title: "Tenant Present",
        message: "Tenant Present Already",
      });
      return;
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
