import { combineReducers } from "redux";

import floorReducer from "./floorReducer";
import roomReducer from "./roomReducer";
import expenseReducer from "./expenseReducer";
import tenantReducer from "./tenantReducer";
import toastReducer from "./toastReducers";
const rootReducer = combineReducers({
  floor: floorReducer,
  room: roomReducer,
  expense: expenseReducer,
  tenant: tenantReducer,
  toast: toastReducer,
});

export default rootReducer;
