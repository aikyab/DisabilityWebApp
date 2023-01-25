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

    DELETE_USER_ACCOUNT_REQUEST,
    DELETE_USER_ACCOUNT_SUCCESS,
    DELETE_USER_ACCOUNT_FAIL,

    CHECK_TOKEN_VALID_REQUEST,
    CHECK_TOKEN_VALID_SUCCESS,
    CHECK_TOKEN_VALID_FAIL
    
} from '../constants/index'

import axios from '../api/Axios';

// Login
export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST
        })
        let formData = new FormData()
        formData.append('username', email);
        formData.append('password', password);

        const response = await axios.post(
            "/auth",
            formData,
            {withCredentials: true}
        );
        // const accessToken = response?.data?.access_token;
        const data = response?.data

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data)) // will create a new key-value pair in localStorage
        // also see store.js file

    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message
        })
    }
}

// Logout
export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({
        type: USER_LOGOUT
    })
    // dispatch({
    //     type: CARD_CREATE_RESET
    // })
}

// check token validation
export const checkTokenValidation = () => async (dispatch, getState) => {
    try {

        dispatch({
            type: CHECK_TOKEN_VALID_REQUEST
        })

        const {
            userLoginReducer: { userInfo }
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.access_token}`
            }
        }

        // call api
        const { data } = await axios.get("/users/checkToken", config)

        dispatch({
            type: CHECK_TOKEN_VALID_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CHECK_TOKEN_VALID_FAIL,
            payload: error.response && error.response.data.details ? error.response.data.details : error.message
        })
    }
}

// user details
export const userDetails = () => async (dispatch, getState) => {

    try {

        dispatch({
            type: USER_DETAILS_REQUEST
        })

        const {
            userLoginReducer: { userInfo }
        } = getState()

        const config = {
            headers: {
                // "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.access_token}`
            }
        }

        // call api
        const { data } = await axios.get(`/users`, config)

        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: USER_DETAILS_FAIL,
            payload: error.response && error.response.data.details ? error.response.data.details : error.message
        })
    }
}

// user account delete
export const userAccountDelete = (userData) => async (dispatch, getState) => {

    try {
        dispatch({
            type: DELETE_USER_ACCOUNT_REQUEST
        })

        const {
            userLoginReducer: { userInfo }
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.access_token}`
            }
        }

        // call api
        const { data } = await axios.post(
            `/users/deleteAccount`,
            {
                "password": userData.password
            },
            config
        )

        dispatch({
            type: DELETE_USER_ACCOUNT_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: DELETE_USER_ACCOUNT_FAIL,
            payload: error.response && error.response.data.details ? error.response.data.details : error.message
        })
    }
}

// user update details
export const userUpdateDetails = (userData) => async (dispatch, getState) => {

    try {
        dispatch({
            type: UPDATE_USER_DETAILS_REQUEST
        })

        const {
            userLoginReducer: { userInfo }
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.access_token}`
            }
        }

        // call api
        const { data } = await axios.put(
            `/users/updateEmail/`,
            {
                "email": userData.email,
                "password": userData.password
            },
            config
        )

        dispatch({
            type: UPDATE_USER_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: UPDATE_USER_DETAILS_FAIL,
            payload: error.response && error.response.data.details ? error.response.data.details : error.message
        })
    }
}




