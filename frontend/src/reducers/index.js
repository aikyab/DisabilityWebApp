import { combineReducers } from "redux";
import {
    userLoginReducer,
    userDetailsReducer,
    checkTokenValidationReducer,
    userDetailsUpdateReducer,
    deleteUserAccountReducer
} from "./userReducer";

import {
    uniListReducer,
    uniDetailsReducer
} from "./assetReducer";

const allReducers = combineReducers({
    userLoginReducer,
    userDetailsReducer,
    checkTokenValidationReducer,
    userDetailsUpdateReducer,
    deleteUserAccountReducer,
    uniListReducer,
    uniDetailsReducer
})

export default allReducers;