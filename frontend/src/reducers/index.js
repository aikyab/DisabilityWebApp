import { combineReducers } from "redux";
import {
    userLoginReducer,
    userDetailsReducer,
    checkTokenValidationReducer,
    userDetailsUpdateReducer,
    deleteUserAccountReducer
} from "./userReducer";

const allReducers = combineReducers({
    userLoginReducer,
    userDetailsReducer,
    checkTokenValidationReducer,
    userDetailsUpdateReducer,
    deleteUserAccountReducer
})

export default allReducers;