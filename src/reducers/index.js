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
import collectionReducer from "./collectionReducer";
import studentReducer from "./studentReducer";

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
  collection: collectionReducer,
  student: studentReducer,
});

export default rootReducer;
