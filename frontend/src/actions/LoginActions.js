
import fetch from 'cross-fetch'

export const DETECT_COOKIE = 'DETECT_COOKIE';
export const RETURN_COOKIE = 'RETURN_COOKIE';
export const STORE_COOKIE = 'STORE_COOKIE';
export const REQUEST_USER_DATA = 'REQUEST_USER_DATA';
export const RETURN_USER_DATA = 'RETURN_USER_DATA';

export function detectCookie() {
    return {
        type: DETECT_COOKIE
    }
}

export function returnCookie(cookieData) {
    return {
        type: RETURN_COOKIE,
        cookie: cookieData
    }
}

export function storeCookie(status) {
    return {
        type: STORE_COOKIE, 
        status
    }
}

export function requestUserData(loginCredentials) {
    return {
        type: REQUEST_USER_DATA,
        loginCredentials
    }
}

export function returnUserData(userData) {
    console.log("returning user data using action", userData)
    return {
        type: RETURN_USER_DATA, 
        userData: userData
    }
}

export function fetchUserData(username, password) {
    var credentials = {
        "username": username,
        "password": password
    };
    console.log("Making fetch request");
    return dispatch => {
        dispatch(requestUserData(credentials));
        return fetch(`/api/auth?username=`+username)
            .then(response => response.json())
            .then(json => dispatch(returnUserData(json)))

    }
}