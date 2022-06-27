import { combineReducers } from "@reduxjs/toolkit";
import loginSlice from "./login";

const rootReducer = combineReducers({
login:loginSlice
});

export default rootReducer;