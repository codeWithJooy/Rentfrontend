import { SET_FOOD_DATA } from "../actionTypes/foodActionType";

const initial = {
  activated: false,
};

const foodReducer = (state = initial, action) => {
  switch (action.type) {
    case SET_FOOD_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default foodReducer;
