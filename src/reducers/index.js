import { combineReducers } from "redux";

import floorReducer from "./floorReducer";
import roomReducer from "./roomReducer";
import expenseReducer from "./expenseReducer";
import tenantReducer from "./tenantReducer";
import toastReducer from "./toastReducers";
import userReducer from "./userReducer";
import dueReducer from "./dueReducer";
import foodReducer from "./foodReducer";
import memberReducer from "./memberReducer";
import annReducer from "./annReducer";

const rootReducer = combineReducers({
  floor: floorReducer,
  room: roomReducer,
  expense: expenseReducer,
  tenant: tenantReducer,
  toast: toastReducer,
  user: userReducer,
  due: dueReducer,
  food: foodReducer,
  member: memberReducer,
  ann: annReducer,
});

export default rootReducer;
