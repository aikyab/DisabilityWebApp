import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,

    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,

    UPDATE_USER_DETAILS_REQUEST,
    UPDATE_USER_DETAILS_SUCCESS,
    UPDATE_USER_DETAILS_FAIL,
    UPDATE_USER_DETAILS_RESET,

    DELETE_USER_ACCOUNT_REQUEST,
    DELETE_USER_ACCOUNT_SUCCESS,
    DELETE_USER_ACCOUNT_FAIL,
    DELETE_USER_ACCOUNT_RESET,

    CHECK_TOKEN_VALID_REQUEST,
    CHECK_TOKEN_VALID_SUCCESS,
    CHECK_TOKEN_VALID_FAIL,
    CHECK_TOKEN_VALID_RESET

} from '../constants/index'


// Login
export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            }
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                userInfo: action.payload
            }
        case USER_LOGIN_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case USER_LOGOUT:
            return {}

        default:
            return state
    }
}

// check token validation reducer
export const checkTokenValidationReducer = (state = {}, action) => {
    switch(action.type) {
        case CHECK_TOKEN_VALID_REQUEST:
            return {
                ...state, 
                loading: true,
                valid: false,
                error: ""
            }
        case CHECK_TOKEN_VALID_SUCCESS:
            return {
                ...state,
                loading: false,
                valid: true,
                error: ""
            }
        case CHECK_TOKEN_VALID_FAIL:
            return {
                ...state,
                loading: false,
                valid: false,
                error: action.payload
            }
        case CHECK_TOKEN_VALID_RESET:
            return {
                ...state,
                loading: false,
                valid: false,
                error: ""
            }
        default:
            return state
    }
}

// user details reducer
export const userDetailsReducer = (state = {}, action) => {
    switch(action.type) {
        case USER_DETAILS_REQUEST:
            return {
                ...state, 
                loading: true,
                user: {},
                error: ""
            }
        case USER_DETAILS_SUCCESS:
            return {
                ...state, 
                loading: false,
                user: action.payload,
                error: ""
            }
        case USER_DETAILS_FAIL:
            return {
                ...state,
                loading: false,
                user: {},
                error: action.payload
            }
        default:
            return state
    }
}


// delete user account reducer
export const deleteUserAccountReducer = (state = {}, action) => {
    switch(action.type) {
        case DELETE_USER_ACCOUNT_REQUEST:
            return {
                ...state, 
                loading: true,
                success: false,
                error: ""
            }
        case DELETE_USER_ACCOUNT_SUCCESS:
            return {
                ...state, 
                loading: false,
                success: true,
                error: ""
            }
        case DELETE_USER_ACCOUNT_FAIL:
            return {
                ...state,
                loading: false,
                success: false,
                error: action.payload
            }
        case DELETE_USER_ACCOUNT_RESET:
            return {
                ...state,
                loading: false,
                success: false,
                error: ""
            }
        default:
            return state
    }
}

// user details update reducer
export const userDetailsUpdateReducer = (state = {}, action) => {
    switch(action.type) {
        case UPDATE_USER_DETAILS_REQUEST:
            return {
                ...state, 
                loading: true,
                user: {},
                success: false,
                error: ""
            }
        case UPDATE_USER_DETAILS_SUCCESS:
            return {
                ...state, 
                loading: false,
                success: true,
                user: action.payload,
                error: ""
            }
        case UPDATE_USER_DETAILS_FAIL:
            return {
                ...state,
                loading: false,
                success: false,
                user: {},
                error: action.payload
            }
        case UPDATE_USER_DETAILS_RESET:
            return {
                ...state,
                loading: false,
                success: false,
                user: {},
                error: ""
            }
        default:
            return state
    }
}