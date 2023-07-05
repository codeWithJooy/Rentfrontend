import { USER_SIGNUP } from "../actionTypes/userAction";

const initialize = {
  userId: "",
};

const userReducer = (state = initialize, action) => {
  switch (action.type) {
    case USER_SIGNUP:
      return {
        userId: action.payload.userId,
      };
    default:
      return state;
  }
};

export default userReducer;
