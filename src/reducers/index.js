import { combineReducers } from "redux";

import floorReducer from "./floorReducer";

const rootReducer = combineReducers({
  floor: floorReducer,
});

export default rootReducer;
