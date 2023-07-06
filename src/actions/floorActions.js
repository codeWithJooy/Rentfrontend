import {
  TOTAL_FLOORS_ADDED,
  ROOMS_ADDED,
  FLOOR_SET,
} from "../actionTypes/floorActionsType";
import { floorApi } from "../apis/apis";
import { checkFloors } from "../validations/floorValidation";
import { dispatchAction } from "./actionHelper";
import { updateToast } from "./toastActions";
import { CodeAnalogy } from "../Components/Toasty/Toasty";

export const setTotalFloors = async (userId, propertyId, floor) => {
  try {
    if (!checkFloors(floor)) return;
    const data = {
      userId,
      propertyId,
      floorCount: floor,
    };
    const response = await floorApi.post("/addFloors", data);
    if (response.data.code == 200) {
      updateToast({
        code: CodeAnalogy.SUCCESS,
        title: "Floor Added",
        message: "Floors Added Succesfully ",
      });
      dispatchAction(TOTAL_FLOORS_ADDED, { totalFloors: floor });
      return;
    } else if (response.data.code == 500) {
      updateToast({
        code: CodeAnalogy.ERROR,
        title: "Something Went Wrong",
        message: "Couldnt Add Floor ",
      });
    }
  } catch (error) {
    console.log(error);
  }
};
export const getTotalFloors = async (userId, propertyId) => {
  const data = {
    userId,
    propertyId,
  };
  const response = await floorApi.post("/getFloorPresent", data);
  if (response.data.code == 200) return response.data.floorPresent;
};
export const addRooms = (data) => {
  return {
    type: ROOMS_ADDED,
    payload: data,
  };
};
export const setFloor = (data) => {
  return {
    type: FLOOR_SET,
    payload: data,
  };
};
