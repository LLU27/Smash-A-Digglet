import { combineReducers } from "redux";
import gameStatusReducer from "./gameStatus";
import scoreReducer from "./scoreReducer";

export default combineReducers({
  gameStatusReducer,scoreReducer
})