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
      return true;
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
  floorId,
  single,
  double,
  triple
) => {
  try {
    const floor = {
      userId,
      propertyId,
      floorName,
      floorId,
      single,
      double,
      triple,
    };
    //This is Added to Check if rooms are all 0
   if(single=="0" && double=="0" && triple=="0"){
    updateToast({
      code:CodeAnalogy.WARN,
      title:"Rooms Cannot Be Zero",
      message:"PLease Add Rooms"
    })
    return
   }
    const res = await floorApi.post("/addRoom", floor);
    if (res.data.code == 200) {
      updateToast({
        code: CodeAnalogy.SUCCESS,
        title: "Rooms Added",
        message: "Succesfully Added The Rooms",
      });
      return true;
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
export const setFloorSelected = (data) => {
  return {
    type: FLOOR_SET,
    payload: data,
  };
};
