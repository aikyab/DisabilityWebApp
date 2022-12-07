import {
    UNIVERSITY_LIST_REQUEST,
    UNIVERSITY_LIST_SUCCESS,
    UNIVERSITY_LIST_FAIL,

    UNIVERSITY_DETAILS_REQUEST,
    UNIVERSITY_DETAILS_SUCCESS,
    UNIVERSITY_DETAILS_FAIL

} from "../constants/index"
import axios from '../api/Axios';

// universities list
export const getUniList = () => async (dispatch) => {
    try {
        dispatch({
            type: UNIVERSITY_LIST_REQUEST
        })

        // call api
        const { data } = await axios.get("/university/")

        dispatch({
            type: UNIVERSITY_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: UNIVERSITY_LIST_FAIL,
            payload: error.message
        })
    }
}

// university details
export const getUniDetails = (id) => async (dispatch) => {
    try {
        dispatch({
            type: UNIVERSITY_DETAILS_REQUEST
        })

        // call api
        const { data } = await axios.get(`/university/getById/${id}/`)

        dispatch({
            type: UNIVERSITY_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: UNIVERSITY_DETAILS_FAIL,
            payload: error.message
        })
    }
}

