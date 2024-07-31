import {
  SET_TENANT,
  TENANT_ADDED,
  SET_TENANT_DATA,
  SET_SINGLE_TENANT,
  SET_TENANT_DETAILS,
} from "../actionTypes/tenantActionsType";
import { updateToast } from "./toastActions";
import { CodeAnalogy } from "../Components/Toasty/Toasty";
import { tenantApi, collectionApi } from "../apis/apis";
import { getHeaders, dispatchAction ,getMultiPart} from "./actionHelper";
import { addTenantValidation } from "../validations/tenantValidation";
import { COMPLAINT_TYPE } from "../actionTypes/studentActionType";
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
export const getTenantsRoomWise = async (userId, propertyId,roomId) => {
  const header = getHeaders({
    userId,
    propertyId,
    roomId
  });
  const res = await tenantApi.get("/getTenantsRoomwise", header);
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

export const getTenantDetails = async (userId, propertyId, tenantId) => {
  try {
    let headers = getHeaders({
      userId,
      propertyId,
      tenantId
    })

    const res = await tenantApi.get("/getTenantDetails", headers)
    if (res.data.code == 200) {
      dispatchAction(SET_TENANT_DETAILS, res.data.model)
    }
    else {
      updateToast({
        code: CodeAnalogy.ERROR,
        title: "Error Retrieving Tenant Details"
      })
    }
  } catch (error) {
    console.log(error.message)
  }
}
export const getTenantsCredentials = async (userId, propertyId) => {
  try {
    let headers = getHeaders({
      userId,
      propertyId,
    })

    const res = await tenantApi.get("/getTenantsCredential", headers)
    if (res.data.code == 200) {
      return res.data.model
    }
    else {
      updateToast({
        code: CodeAnalogy.ERROR,
        title: res.data.msg
      })
    }
  } catch (error) {
    console.log(error.message)
  }
}
export const resetTenantPassword = async (userId, propertyId, tenantId, password) => {
  try {
    let headers = getHeaders({
      userId,
      propertyId,
      tenantId,
      password
    })

    const res = await tenantApi.get("/resetTenantPassword", headers)
    if (res.data.code == 200) {
      updateToast({
        code: CodeAnalogy.SUCCESS,
        title: res.data.msg
      })
      return true;
    }
    else {
      updateToast({
        code: CodeAnalogy.ERROR,
        title: res.data.msg
      })
      return false;
    }
  } catch (error) {
    console.log(error.message)
  }
}
export const updateTenant=async(userId,propertyId,tenantId,data)=>{
  try{
    let headers=getHeaders({
       userId,
       propertyId,
       tenantId,
    })
    const res=await tenantApi.post("/updateTenant",data,headers)
    if(res.data.code==200){
      updateToast({
        code:CodeAnalogy.SUCCESS,
        title:res.data.msg
      })
    }
    else{
      updateToast({
        code:CodeAnalogy.ERROR,
        title:res.data.msg
      })
    }
  }
  catch(error){
    console.log(error.message)
  }
}
export const remindTenant=async (userId,propertyId,propertyName,tenantId,type,due,dueDate)=>{
  try{
    let data={
      userId,
      propertyId,
      propertyName,
      tenantId,
      type,
      due,
      dueDate,
    }
    const res=await tenantApi.post("/remindTenant",data)
    if(res.data.code==200){
      updateToast({
        code:CodeAnalogy.SUCCESS,
        title:res.data.msg
      })
    }
    else{
      updateToast({
        code:CodeAnalogy.ERROR,
        title:res.data.msg
      })
    }
  }catch(error){
    console.log(error.message)
  }
}
export const addTenantDocument= async(formData)=>{
  try{
    let headers=getMultiPart()
    const res=await tenantApi.post("/addDocument",formData,headers)
    if(res.data.code==200){
      updateToast({
        code:CodeAnalogy.SUCCESS,
        title:"Dcument Uploaded Sucessfully"
      })
      return res.data.url
    }
    else{
      updateToast({
        code:CodeAnalogy.ERROR,
        title:res.data.msg
      })
      return ""
    }
  }
  catch(error){
    console.log(error.message)
  }
}
export const getTenantDocument=async(userId,propertyId,tenantId,docType)=>{
  try{
     let headers=getHeaders({
      userId,
      propertyId,
      tenantId,
      docType
     })
     let res=await tenantApi.get("/getDocument",headers)
     if(res){
      return res.data.url
     }
  }catch(error){
    console.log(error.message)
  }
}