import axios from 'axios';
import store from '../redux/store';

export const userService = {
    registerUser,
    confirmOTP,
    requestOTP,
    userInfo
}

// send mobile and name to register user
function registerUser(user) {
    const requestOptions = {
        url:'https://drimo.org/api/v1/auth',
        method: 'POST',
        data: {
            mobile:user.mobile,
            name:user.name
        }
    };
    return axios(requestOptions)
}

// request otp , when user had registerd before and wants to login 
function requestOTP(mobile) {
    const requestOptions = {
        url:'https://drimo.org/api/v1/auth',
        method: 'POST',
        data: {
            mobile,
            _method:'PUT'
        }
    };
    return axios(requestOptions)
}

// confirm otp and will get token 
function confirmOTP(otp){ //login
    let mobile=store.getState().mobile
    const requestOptions = {
        url:'https://drimo.org/api/v1/auth',
        method: 'POST',
        data: {
            mobile:'09126505468',
            _method:'PUT',
            verification:otp
        }
    };
    return axios(requestOptions)
}


// get user info by token
function userInfo() {
        const requestOptions = {
            url:'https://drimo.org/api/v1/user',
            method: 'get',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
                'X-localization': 'fa'
            },
          
            // body: JSON.stringify(user)
        };
        return axios(requestOptions)
    
}
