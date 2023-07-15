import { SET_FOOD_DATA, SET_FOOD_TIME } from "../actionTypes/foodActionType";

const initial = {
  activated: false,
};

const foodReducer = (state = initial, action) => {
  switch (action.type) {
    case SET_FOOD_DATA:
      return action.payload;
    case SET_FOOD_TIME:
      return {
        ...state,
        timeActivated: true,
      };
    default:
      return state;
  }
};

export default foodReducer;
