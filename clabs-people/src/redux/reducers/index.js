import { combineReducers } from "redux";
import empReducer from "./empReducer";

const rootReducer =  combineReducers({
    emps: empReducer
})

export default rootReducer