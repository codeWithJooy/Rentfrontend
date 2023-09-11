import {
  COMPLAINT_TYPE,
  CODE_NUMBER_CHECK,
  SET_STUDENT_PAYMENT_DETAILS,
} from "../../actionTypes/studentActionType";
import { dispatchAction, getHeaders } from "../actionHelper";
import { studentApi, tenantApi, complaintApi, duesApi, foodApi } from "../../apis/apis";
import { updateToast } from "../toastActions";
import { CodeAnalogy } from "../../Components/Toasty/Toasty";
import { updateLocale } from "moment";
export const setComplaintType = (data) => {
  return {
    type: COMPLAINT_TYPE,
    payload: data,
  };
};
export const setStudentPaymentDetails = (data) => {
  return {
    type: SET_STUDENT_PAYMENT_DETAILS,
    payload: data,
  };
  //dispatchAction(SET_STUDENT_PAYMENT_DETAILS, data);
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
      updateToast({
        code: CodeAnalogy.SUCCESS,
        title: `Welcome to ${res.data.model.propertyName}`,
        message: "Please make Sure code is correct.",
      });
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

export const studentLogin = async (email, password) => {
  try {
    const headers = getHeaders({
      email,
      password,
    });
    const res = await studentApi.get("/studentLogin", headers);
    if (res.data.code == 200) {
      dispatchAction(CODE_NUMBER_CHECK, res.data.model);
      updateToast({
        code: CodeAnalogy.SUCCESS,
        title: `Welcome to ${res.data.model.propertyName}`,
      });
      return true;
    } else {
      updateToast({
        code: CodeAnalogy.ERROR,
        title: res.data.model,
      });
      return false;
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const addStudent = async (data) => {
  try {
    const res = await studentApi.post("/addStudent", data);
    if (res.data.code == 200) {
      dispatchAction(CODE_NUMBER_CHECK, res.data.model);
      updateToast({
        code: CodeAnalogy.SUCCESS,
        title: `Successfully Signed Up`,
      });
      return true;
    } else {
      updateToast({
        code: CodeAnalogy.ERROR,
        title: "Something Went Wrong",
        message: "Please try again later",
      });
      return false;
    }
  } catch (error) {
    console.log(error.message);
  }
};
export const getStudentDues = async (userId, propertyId, tenantId) => {
  try {
    const headers = getHeaders({
      userId,
      propertyId,
      tenantId,
    });
    const res = await studentApi.get("/getStudentDues", headers)
    if (res.data.code == 200) {
      return res.data.model;
    } else {
      updateToast({
        code: CodeAnalogy.ERROR,
        title: "Error Retrieving Dues",
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};
export const getStudentDuesStatus = async (userId, propertyId, tenantId) => {
  try {
    const headers = getHeaders({
      userId,
      propertyId,
      tenantId,
    });
    const res = await studentApi.get("/getStudentDuesStatus", headers)
    if (res.data.code == 200) {
      return res.data.model;
    } else {
      updateToast({
        code: CodeAnalogy.ERROR,
        title: "Error Retrieving Dues",
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};
export const getStudentTotalDues = async (userId, propertyId, tenantId) => {
  try {
    const headers = getHeaders({
      userId,
      propertyId,
      tenantId,
    });
    const res = await studentApi.get("/getStudentTotalDues", headers)
    if (res.data.code == 200) {
      return res.data.model;
    } else {
      updateToast({
        code: CodeAnalogy.ERROR,
        title: "Error Retrieving Dues",
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};
export const getStudentTotalExpenses = async (userId, propertyId, tenantId) => {
  try {
    const headers = getHeaders({
      userId,
      propertyId,
      tenantId,
    });
    const res = await studentApi.get("/getStudentTotalExpenses", headers)
    if (res.data.code == 200) {
      return res.data.model;
    } else {
      updateToast({
        code: CodeAnalogy.ERROR,
        title: "Error Retrieving Dues",
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};
export const getStudentExpenses = async (userId, propertyId, tenantId) => {
  try {
    const headers = getHeaders({
      userId,
      propertyId,
      tenantId,
    });
    const res = await studentApi.get("/getStudentExpenses", headers)
    if (res.data.code == 200) {
      return res.data.model;
    } else {
      updateToast({
        code: CodeAnalogy.ERROR,
        title: "Error Retrieving Dues",
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};
export const addPendingCollection = async (data) => {
  try {
    const res = await studentApi.post("/addPendingCollection", data);
    if (res.data.code == 200) {
      updateToast({
        code: CodeAnalogy.SUCCESS,
        title: `Payment Waiting For Approval`,
      });
      return true;
    } else {
      updateToast({
        code: CodeAnalogy.ERROR,
        title: "Something Went Wrong",
        message: "Please try again later",
      });
      return false;
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const raiseComplaint = async (data) => {
  try {
    const res = await complaintApi.post("/raiseComplaint", data);
    if (res.data.code == 200) {
      updateToast({
        code: CodeAnalogy.SUCCESS,
        title: `Complaint Raised Successfully`,
      });
      return true;
    } else {
      updateToast({
        code: CodeAnalogy.ERROR,
        title: "Something Went Wrong",
        message: "Please try again later",
      });
      return false;
    }
  } catch (error) {
    console.log(error.message)
  }
}
export const getComplaints = async (userId, propertyId) => {
  try {
    const headers = getHeaders({
      userId,
      propertyId,
    })
    const res = await complaintApi.get("/getComplaints", headers);
    if (res.data.code == 200) {
      return res.data.model;
    } else {
      updateToast({
        code: CodeAnalogy.ERROR,
        title: "Something Went Wrong",
        message: "Please try again later",
      });
      return false;
    }
  } catch (error) {
    console.log(error.message)
  }
}

export const getStudentComplaints = async (userId, propertyId, tenantId) => {
  try {
    const headers = getHeaders({
      userId,
      propertyId,
      tenantId
    })
    const res = await complaintApi.get("/getStudentComplaints", headers);
    if (res.data.code == 200) {
      return res.data.model;
    } else {
      // updateToast({
      //   code: CodeAnalogy.ERROR,
      //   title: "Something Went Wrong",
      //   message: "Please try again later",
      // });
      return false;
    }
  } catch (error) {
    console.log(error.message)
  }
}

export const updateStatus = async (id, status) => {
  try {
    const data = {
      id,
      status
    }
    const res = await complaintApi.put("/updateStatus", data);
    if (res.data.code == 200) {
      updateToast({
        code: CodeAnalogy.SUCCESS,
        title: `Complaint Status Updated`,
      });
      return true;
    } else {
      updateToast({
        code: CodeAnalogy.ERROR,
        title: "Something Went Wrong",
        message: "Please try again later",
      });
      return false;
    }
  }
  catch (err) {
    console.log(err.message)
  }
}

export const getStudentFood = async (userId, propertyId, today) => {
  try {
    let headers = getHeaders({
      userId,
      propertyId,
      today,
    })
    let res = await foodApi.get("/getFood", headers)
    if (res.data.code == 200)
      return res.data.model
    else {
      updateToast({
        code: CodeAnalogy.ERROR,
        title: res.data.msg
      })
    }
  }

  catch (error) {
    console.log(error.message)
  }
}
export const getStudentNotifications=async(userId,propertyId,tenantId)=>{
  try{
     let headers=getHeaders({
      userId,
      propertyId,
      tenantId,
     })
     const res=await studentApi.get("/getStudentNotifications",headers)
     if(res.data.code==200){
      return res.data.model
     }
     else{
      updateToast({
        code:CodeAnalogy.ERROR,
        title:res.data.msg
      })
      return []
     }
  }
  catch(error){
    console.log(error.message)
  }
}
export const getStudentNotificationsCount=async(userId,propertyId,tenantId)=>{
  try{
     let headers=getHeaders({
      userId,
      propertyId,
      tenantId,
     })
     const res=await studentApi.get("/getStudentNotificationsCount",headers)
     if(res.data.code==200){
      return res.data.model
     }
     else{
      updateToast({
        code:CodeAnalogy.ERROR,
        title:res.data.msg
      })
      return []
     }
  }
  catch(error){
    console.log(error.message)
  }
}
export const updateStudentNotifications=async(userId,propertyId,tenantId)=>{
  try{
     let headers=getHeaders({
      userId,
      propertyId,
      tenantId,
     })
     const res=await studentApi.put("/updateStudentNotifications",{},headers)
     if(res.data.code==200){
      return res.data.model
     }
     else{
      updateToast({
        code:CodeAnalogy.ERROR,
        title:res.data.msg
      })
      return []
     }
  }
  catch(error){
    console.log(error.message)
  }
}
export const addStudentLate = async (userId, propertyId, tenantId, data) => {
  try {
    let headers = getHeaders({
      userId,
      propertyId,
      tenantId,

    })
    
    let res = await studentApi.post("/addStudentLate", data, headers)
    if (res.data.code == 200) {
      updateToast({
        code: CodeAnalogy.SUCCESS,
        title: res.data.msg
      })
      return true
    }
    else {
      updateToast({
        code: CodeAnalogy.ERROR,
        title: res.data.msg
      })
    }
    return false
  }
  catch (error) {
    console.log(error.message)
  }
}

export const getLate = async (userId,propertyId) => {
  try {
    let headers={
      userId,
      propertyId,
    }
    let res = await studentApi.post("/getLate", headers)
    if (res.data.code == 200) {
      return res.data.model
    }
    else {
      updateToast({
        code: CodeAnalogy.ERROR,
        title: res.data.msg
      })
      return false
    }
  }
  catch (error) {
    console.log(error.message)
  }
}
export const updateStudentLate = async (lateId,status) => {
  try {
    let data={
      lateId,
      status,
    }
    let res = await studentApi.post("/updateStudentLate", data)
    if (res.data.code == 200) {
      updateToast({
        code: CodeAnalogy.SUCCESS,
        title: res.data.msg
      })
      return true
    }
    else {
      updateToast({
        code: CodeAnalogy.ERROR,
        title: res.data.msg
      })
      return false
    }
  }
  catch (error) {
    console.log(error.message)
  }
}
export const addStudentHosting = async (userId, propertyId, tenantId, data) => {
  try {
    let headers = getHeaders({
      userId,
      propertyId,
      tenantId,

    })

    let res = await studentApi.post("/addStudentHosting", data, headers)
    if (res.data.code == 200) {
      updateToast({
        code: CodeAnalogy.SUCCESS,
        title: res.data.msg
      })
      return true
    }
    else {
      updateToast({
        code: CodeAnalogy.ERROR,
        title: res.data.msg
      })
      return false
    }
  }
  catch (error) {
    console.log(error.message)
  }
}

export const getHosting = async (userId,propertyId) => {
  try {
    let headers=getHeaders({
      userId,
      propertyId,
    })
    let res = await studentApi.get("/getHosting", headers)
    if (res.data.code == 200) {
      return res.data.model
    }
    else {
      updateToast({
        code: CodeAnalogy.ERROR,
        title: res.data.msg
      })
      return false
    }
  }
  catch (error) {
    console.log(error.message)
  }
}

export const updateStudentHosting = async (userId,propertyId,tenantId,hostingId,status,data) => {
  try {
    let headers=getHeaders({
      userId,
      propertyId,
      tenantId,
      hostingId,
      status,
    })

    let res = await studentApi.put("/updateHosting", data,headers)
    if (res.data.code == 200) {
      updateToast({
        code: CodeAnalogy.SUCCESS,
        title: res.data.msg
      })
      return true
    }
    else {
      updateToast({
        code: CodeAnalogy.ERROR,
        title: res.data.msg
      })
      return false
    }
  }
  catch (error) {
    console.log(error.message)
  }
}
