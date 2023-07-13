import { foodApi } from "../apis/apis";
import { dispatchAction, getHeaders } from "./actionHelper";
import { updateToast } from "./toastActions";
import { CodeAnalogy } from "../Components/Toasty/Toasty";
import { SET_FOOD_DATA } from "../actionTypes/foodActionType";

export const activateFood = async (userId, propertyId) => {
  try {
    const data = {
      userId,
      propertyId,
    };
    const res = await foodApi.post("/activateFood", data);
    if (res.data.code == 200) {
      updateToast({
        code: CodeAnalogy.SUCCESS,
        title: "Food Section Activated",
      });
      dispatchAction(SET_FOOD_DATA, res.data.model);
      return true;
    } else {
      updateToast({
        code: CodeAnalogy.ERROR,
        title: "Something Went Wrong",
        message: "Error in Activating Food",
      });
      return false;
    }
  } catch (error) {
    console.log(error.message);
  }
};
export const getActivated = async (userId, propertyId) => {
  try {
    const header = getHeaders({
      userId,
      propertyId,
    });
    const res = await foodApi.get("/getActivated", header);
    if (res.data.code == 200) {
      dispatchAction(SET_FOOD_DATA, res.data.model);
      return;
    }
  } catch (error) {
    updateToast({
      code: CodeAnalogy.ERROR,
      title: "Something Went Wrong",
      message: "Error Fetching Food Data",
    });
    console.log(error.message);
  }
};
