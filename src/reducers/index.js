import { combineReducers } from "redux";

import floorReducer from "./floorReducer";
import roomReducer from "./roomReducer";

const rootReducer = combineReducers({
  floor: floorReducer,
  room: roomReducer,
});

export default rootReducer;
