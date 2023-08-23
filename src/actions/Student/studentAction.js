import {
  COMPLAINT_TYPE,
  CODE_NUMBER_CHECK,
  SET_STUDENT_PAYMENT_DETAILS,
} from "../../actionTypes/studentActionType";
import { dispatchAction, getHeaders } from "../actionHelper";
import { studentApi, tenantApi, complaintApi, duesApi } from "../../apis/apis";
import { updateToast } from "../toastActions";
import { CodeAnalogy } from "../../Components/Toasty/Toasty";
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