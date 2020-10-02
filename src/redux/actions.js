import {
    SET_MOBILE,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGIN_SUCCESS,
    SET_USER_INFO
} from './types';
export const setMobile = (mobile) => {
    return {
        type: SET_MOBILE,
        payload: mobile
    }
}
export const registerSuccess = (response) => {
    return {
        type: REGISTER_SUCCESS,
        payload: response
    }
}
export const registerFailure = (error) => {
    return {
        type: REGISTER_FAILURE,
        payload: error
    }
}
export const loginSuccess = (response) => {
    return {
        type: LOGIN_SUCCESS,
        payload: response
    }
}
export const setUserInfo = (info) => {
    return {
        type: SET_USER_INFO,
        payload: info
    }
}
