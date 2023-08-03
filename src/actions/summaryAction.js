import { summaryApi } from "../apis/apis";
import { getHeaders } from "./actionHelper";
import { updateToast } from "./toastActions";
import { CodeAnalogy } from "../Components/Toasty/Toasty";

export const getCurrentDeposit = async (userId, propertyId) => {
  try {
    const headers = getHeaders({
      userId,
      propertyId,
    });
    const res = await summaryApi.get("/getCurrentDeposit", headers);
    if (res.data.code == 200) {
      return res.data.model;
    } else {
      updateToast({
        code: CodeAnalogy.ERROR,
        title: "Something Went Wrong",
      });
    }
  } catch (error) {
    console.log(error);
  }
};
export const getTodaysCollection = async (userId, propertyId) => {
  try {
    const headers = getHeaders({
      userId,
      propertyId,
    });
    const res = await summaryApi.get("/getTodaysCollection", headers);
    if (res.data.code == 200) {
      return res.data.model;
    } else {
      updateToast({
        code: CodeAnalogy.ERROR,
        title: "Something Went Wrong",
      });
    }
  } catch (error) {
    console.log(error);
  }
};
export const getMonthCollection = async (userId, propertyId) => {
  try {
    const headers = getHeaders({
      userId,
      propertyId,
    });
    const res = await summaryApi.get("/getMonthCollection", headers);
    if (res.data.code == 200) {
      return res.data.model;
    } else {
      updateToast({
        code: CodeAnalogy.ERROR,
        title: "Something Went Wrong",
      });
    }
  } catch (error) {
    console.log(error);
  }
};
export const getMonthDue = async (userId, propertyId) => {
  try {
    const headers = getHeaders({
      userId,
      propertyId,
    });
    const res = await summaryApi.get("/getMonthDue", headers);
    if (res.data.code == 200) {
      return res.data.model;
    } else {
      updateToast({
        code: CodeAnalogy.ERROR,
        title: "Something Went Wrong",
      });
    }
  } catch (error) {
    console.log(error);
  }
};
export const getTotalDue = async (userId, propertyId) => {
  try {
    const headers = getHeaders({
      userId,
      propertyId,
    });
    const res = await summaryApi.get("/getTotalDue", headers);
    if (res.data.code == 200) {
      return res.data.model;
    } else {
      updateToast({
        code: CodeAnalogy.ERROR,
        title: "Something Went Wrong",
      });
    }
  } catch (error) {
    console.log(error);
  }
};
export const getMonthExpense = async (userId, propertyId) => {
  try {
    const headers = getHeaders({
      userId,
      propertyId,
    });
    const res = await summaryApi.get("/getMonthExpense", headers);
    if (res.data.code == 200) {
      return res.data.model;
    } else {
      updateToast({
        code: CodeAnalogy.ERROR,
        title: "Something Went Wrong",
      });
    }
  } catch (error) {
    console.log(error);
  }
};
export const getTotalRooms = async (userId, propertyId) => {
  try {
    const headers = getHeaders({
      userId,
      propertyId,
    });
    const res = await summaryApi.get("/getTotalRooms", headers);
    if (res.data.code == 200) {
      return res.data.model;
    } else {
      updateToast({
        code: CodeAnalogy.ERROR,
        title: "Something Went Wrong",
      });
    }
  } catch (error) {
    console.log(error);
  }
};
export const getTotalBed = async (userId, propertyId) => {
  try {
    const headers = getHeaders({
      userId,
      propertyId,
    });
    const res = await summaryApi.get("/getTotalBed", headers);
    if (res.data.code == 200) {
      return res.data.model;
    } else {
      updateToast({
        code: CodeAnalogy.ERROR,
        title: "Something Went Wrong",
      });
    }
  } catch (error) {
    console.log(error);
  }
};
export const getVacantBed = async (userId, propertyId) => {
  try {
    const headers = getHeaders({
      userId,
      propertyId,
    });
    const res = await summaryApi.get("/getVacentBed", headers);
    if (res.data.code == 200) {
      return res.data.model;
    } else {
      updateToast({
        code: CodeAnalogy.ERROR,
        title: "Something Went Wrong",
      });
    }
  } catch (error) {
    console.log(error);
  }
};
export const getTotalTenants = async (userId, propertyId) => {
  try {
    const headers = getHeaders({
      userId,
      propertyId,
    });
    const res = await summaryApi.get("/getTotalTenants", headers);
    if (res.data.code == 200) {
      return res.data.model;
    } else {
      updateToast({
        code: CodeAnalogy.ERROR,
        title: "Something Went Wrong",
      });
    }
  } catch (error) {
    console.log(error);
  }
};
export const getNotificationCount = async (userId, propertyId) => {
  try {
    const headers = getHeaders({
      userId,
      propertyId,
    });
    const res = await summaryApi.get("/getNotificationCount", headers);
    if (res.data.code == 200) {
      return res.data.model;
    } else {
      updateToast({
        code: CodeAnalogy.ERROR,
        title: "Something Went Wrong",
      });
    }
  } catch (error) {
    console.log(error);
  }
};