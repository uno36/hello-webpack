import { combineReducers } from "redux";
import greetingReducer from "./reducers/greetingsReducers";

const rootReducer = combineReducers({
  greeting: greetingReducer,
});

export default rootReducer;
