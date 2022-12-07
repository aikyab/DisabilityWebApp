import {
    UNIVERSITY_LIST_REQUEST,
    UNIVERSITY_LIST_SUCCESS,
    UNIVERSITY_LIST_FAIL,

    UNIVERSITY_DETAILS_REQUEST,
    UNIVERSITY_DETAILS_SUCCESS,
    UNIVERSITY_DETAILS_FAIL

} from '../constants/index'


// products list
export const uniListReducer = (state = { universities: [] }, action) => {
    switch (action.type) {
        case UNIVERSITY_LIST_REQUEST:
            return {
                ...state,
                loading: true,
                universities: [],   // always pass the object during the request
                error: ""
            }
        case UNIVERSITY_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                universities: action.payload,
                error: ""
            }
        case UNIVERSITY_LIST_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

// product details
export const uniDetailsReducer = (state = { uniDetails: {} }, action) => {
    switch (action.type) {
        case UNIVERSITY_DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
                uniDetails: {},        // always pass the object during the request
                error: ""
            }
        case UNIVERSITY_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                uniDetails: action.payload,
                error: ""
            }
        case UNIVERSITY_DETAILS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}
