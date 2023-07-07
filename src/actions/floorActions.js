import {
  TOTAL_FLOORS_ADDED,
  ROOMS_ADDED,
  FLOOR_SET,
} from "../actionTypes/floorActionsType";
import { floorApi } from "../apis/apis";
import { checkFloors } from "../validations/floorValidation";
import { dispatchAction, getHeaders } from "./actionHelper";
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
export const getFloors = async (userId, propertyId) => {
  try {
    const headers = getHeaders({
      userId,
      propertyId,
    });
    const response = await floorApi.get("/getFloors", headers);
    if (response.data.code == 200) {
      return response.data.model;
    } else {
      updateToast({
        code: CodeAnalogy.ERROR,
        title: "Something Went Wrong",
        message: "Unable to fetch Floor Data",
      });
      return [];
    }
  } catch (error) {
    console.log(error);
    return [];
  }
};
export const addRooms = async (
  userId,
  propertyId,
  floorName,
  single,
  double,
  triple
) => {
  try {
    const floor = {
      userId,
      propertyId,
      floorName,
      single,
      double,
      triple,
    };

    const res = await floorApi.post("/addRoom", floor);
    if (res.data.code == 200) {
      updateToast({
        code: CodeAnalogy.SUCCESS,
        title: "Rooms Added",
        message: "Succesfully Added The Rooms",
      });
      return;
    } else {
      updateToast({
        code: CodeAnalogy.ERROR,
        title: "Something Went Wrong",
        message: "Rooms couldnt be added",
      });
      return;
    }
  } catch (error) {
    console.log(error.message);
  }
};
export const setFloor = (data) => {
  return {
    type: FLOOR_SET,
    payload: data,
  };
};
