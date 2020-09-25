import { combineReducers } from "redux";
import reducer from "./rootReducer";

const rootReducer = combineReducers({ root: reducer });
export default rootReducer;
