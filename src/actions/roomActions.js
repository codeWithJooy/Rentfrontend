import {
  FLOOR_ROOMS_ADDED,
  SET_ROOM,
  ROOM_UPDATE,
} from "../actionTypes/roomActionsType";
import { roomApi } from "../apis/apis";
import { dispatchAction, getHeaders } from "./actionHelper";
import { updateToast } from "./toastActions";
import { CodeAnalogy } from "../Components/Toasty/Toasty";

export const getRooms = async (userId, propertyId, floorName) => {
  try {
    const header = getHeaders({
      userId,
      propertyId,
      floorName,
    });
    const res = await roomApi.get("/getRooms", header);
    if (res.data.code == 200) {
      return res.data.model;
    } else {
      updateToast({
        code: CodeAnalogy.ERROR,
        title: "Something Went Wrong",
        message: "Error Fetching Room Data",
      });
    }
  } catch (error) {
    console.log(error);
  }
};
export const setRooms = (data) => {
  return {
    type: FLOOR_ROOMS_ADDED,
    payload: data,
  };
};
export const selectedRoom = (data) => {
  return {
    type: SET_ROOM,
    payload: data,
  };
};
export const roomUpdate = (data) => {
  return {
    type: ROOM_UPDATE,
    payload: data,
  };
};
