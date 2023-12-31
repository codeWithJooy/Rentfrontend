import {
  FLOOR_ROOMS_ADDED,
  SET_ROOM,
  ROOM_UPDATE,
} from "../actionTypes/roomActionsType";
import { roomApi } from "../apis/apis";
import { dispatchAction, getHeaders } from "./actionHelper";
import { updateToast } from "./toastActions";
import { CodeAnalogy } from "../Components/Toasty/Toasty";

export const getRooms = async (userId, propertyId, id) => {
  try {
    const header = getHeaders({
      userId,
      propertyId,
      floorId: id,
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
export const getRoomName = async (userId, propertyId, roomId) => {
  try {
    const header = getHeaders({
      userId,
      propertyId,
      roomId,
    });
    const res = await roomApi.get("/getRoomName", header);
    if (res.data.code == 200) {
      return res.data.model;
    } else {
      updateToast({
        code: CodeAnalogy.ERROR,
        title: "Something Went Wrong",
        message: "Error Fetching Room Name",
      });
    }
  } catch (error) {
    console.log(error);
  }
};
export const getAllRooms = async (userId, propertyId) => {
  try {
    const header = getHeaders({
      userId,
      propertyId,
    });
    const res = await roomApi.get("/getAllRooms", header);
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
export const getTotalRoomCounts = async (userId, propertyId) => {
  try {
    const header = getHeaders({
      userId,
      propertyId,
    });
    const res = await roomApi.get("/getTotalRoomCounts", header);
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
export const getSingleRoom = async (
  userId,
  propertyId,
  roomId
) => {
  try {
    const header = getHeaders({
      userId,
      propertyId,
      roomId,
    });
    const res = await roomApi.get("/getSingleRoom", header);
    if (res.data.code == 200) {
      return res.data.model;
    } else {
      updateToast({
        code: CodeAnalogy.ERROR,
        title: "Something Went Wrong",
        message: "Cannot Retrive Room Data",
      });
      return;
    }
  } catch (error) {
    console.log(error);
  }
};
export const updateRoom = async (userId, propertyId, data) => {
  const headers = getHeaders({
    userId,
    propertyId,
    roomId: data._id,
  });
  const update = {
    name: data.name,
    rate: data.rate,
  };
  const res = await roomApi.put("/updateRoom", update, headers);
  if (res.data.code == 200) {
    updateToast({
      code: CodeAnalogy.SUCCESS,
      title: "Successfully Updated",
      message: "Changes Updated Successfully",
    });
    return;
  } else {
    updateToast({
      code: CodeAnalogy.ERROR,
      title: "Something Went Wrong",
      message: "Unable to update data",
    });
    return;
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
