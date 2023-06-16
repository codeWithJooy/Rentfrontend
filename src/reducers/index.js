import { combineReducers } from "redux";

import floorReducer from "./floorReducer";
import roomReducer from "./roomReducer";
import expenseReducer from "./expenseReducer";
const rootReducer = combineReducers({
  floor: floorReducer,
  room: roomReducer,
  expense: expenseReducer,
});

export default rootReducer;
