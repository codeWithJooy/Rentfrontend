import { combineReducers } from "redux";

import floorReducer from "./floorReducer";
import roomReducer from "./roomReducer";
import expenseReducer from "./expenseReducer";
import tenantReducer from "./tenantReducer";
import toastReducer from "./toastReducers";
import userReducer from "./userReducer";
import dueReducer from "./dueReducer";
import foodReducer from "./foodReducer";

const rootReducer = combineReducers({
  floor: floorReducer,
  room: roomReducer,
  expense: expenseReducer,
  tenant: tenantReducer,
  toast: toastReducer,
  user: userReducer,
  due: dueReducer,
  food: foodReducer,
});

export default rootReducer;
