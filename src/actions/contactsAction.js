import { contactApi } from "../apis/apis";
import { CodeAnalogy } from "../Components/Toasty/Toasty";
import { getHeaders } from "./actionHelper";
import { updateToast } from "./toastActions";

export const addContactType = async (data) => {
  try {
    const response = await contactApi.post("/addContactType", data);
    if (response.data.code === 200) {
      updateToast({
        code: CodeAnalogy.SUCCESS,
        title: "Contact Type Added",
      });
      return;
    } else {
        updateToast({
            code: CodeAnalogy.SUCCESS,
            title: "",
            message:response.data.message
          });
    }
  } catch (error) {
    updateToast({
      code: CodeAnalogy.ERROR,
      title: "Something Went Wrong",
      message: "Couldnt Add Contact Type ",
    });
  }
};

export const getContactType=async(userId,propertyId)=>{
  try{
   const headers=getHeaders({
    userId,
    propertyId
   })
   let response=await contactApi.get("/getContactTypes",headers)
   if(response.data.code===200){
    return response.data.model;
   }
   else{
    updateToast({
      code: CodeAnalogy.ERROR,
      title: "Something Went Wrong",
      message: "Unable to fetch Contact Types",
    });
    return [];
   }
  }catch(error){
    updateToast({
      code: CodeAnalogy.ERROR,
      title: "Something Went Wrong",
      message: "Couldnt Fetch Contact Type ",
    });
  }
}
export const addContacts = async (data) => {
  try {
    const response = await contactApi.post("/addContact", data);
    if (response.data.code === 200) {
      updateToast({
        code: CodeAnalogy.SUCCESS,
        title: "Contact Added",
      });
      return;
    } else {
        updateToast({
            code: CodeAnalogy.SUCCESS,
            title: "",
            message:response.data.message
          });
    }
  } catch (error) {
    updateToast({
      code: CodeAnalogy.ERROR,
      title: "Something Went Wrong",
      message: "Couldnt Add Contact ",
    });
  }
};
export const getContacts=async(userId,propertyId)=>{
  try{
   const headers=getHeaders({
    userId,
    propertyId
   })
   let response=await contactApi.get("/getContacts",headers)
   if(response.data.code===200){
    return response.data.model;
   }
   else{
    updateToast({
      code: CodeAnalogy.ERROR,
      title: "Something Went Wrong",
      message: "Unable to fetch Contacts",
    });
    return [];
   }
  }catch(error){
    updateToast({
      code: CodeAnalogy.ERROR,
      title: "Something Went Wrong",
      message: "Couldnt Fetch Contacts ",
    });
  }
}