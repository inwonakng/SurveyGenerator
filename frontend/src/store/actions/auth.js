import * as actionTypes from "./actionTypes"
import axios from "axios"
import { toast } from "react-toastify";

const API_BASE = 'http://127.0.0.1:8011/rest-auth'

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = token => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token
    }
}

export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const logout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('username')
    localStorage.removeItem('token')
    localStorage.removeItem('expirationDate')
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

export const checkAuthTimeout = expirationTime => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        }, expirationTime*1000)
    }
}

export const authLogin = (username, password) => {
    return dispatch => {
        dispatch(authStart());
        axios.post(`${API_BASE}/login/`, {
            username: username,
            password: password
        })
        .then(res => {
            const token = res.data.key;
            // expires one hour into the future
            const expirationDate = new Date(new Date().getTime() + 3600 * 1000)
            localStorage.setItem('token', token)
            localStorage.setItem('expirationDate', expirationDate)
            localStorage.setItem('username', username)
            dispatch(authSuccess(token))
            dispatch(checkAuthTimeout(3600))
            window.location.href="/surveys"
        })
        .catch(err => {
            dispatch(authFail(err))

            for (let field in err.response.data) {
                toast.error(`⚠️ ${err.response.data[field]}`, { position: toast.POSITION.TOP_CENTER, pauseOnHover: false });
            }

    
            
        })
    }
}

export const authSignup = (username, email, password1, password2) => {
    return dispatch => {
        dispatch(authStart());
        axios.post(`${API_BASE}/registration/`, {
            username: username,
            password1: password1,
            password2: password2,
            email: email
        })
        .then(res => {
            const token = res.data.key;
            // expires one hour into the future
            const expirationDate = new Date(new Date().getTime() + 3600 * 1000)
            localStorage.setItem('token', token)
            localStorage.setItem('expirationDate', expirationDate)
            localStorage.setItem('username', username)
            dispatch(authSuccess(token))
            dispatch(checkAuthTimeout(3600))
            toast.success('Successfully created account!', { position: toast.POSITION.TOP_CENTER, pauseOnHover: false })
            window.location.href="/surveys"
        })
        .catch(err => {
            const fieldnames = {username: "username", email: "email", password1: "password", password2: "confirm password"};
            dispatch(authFail(err))
            for (let field in err.response.data) {
                toast.error(`⚠️ ${fieldnames[field]}: ${err.response.data[field]}`, { position: toast.POSITION.TOP_CENTER, pauseOnHover: false });
            }
        })
    }
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem("token")
        if (token === undefined) {
            dispatch(logout())
        } else {
            const expirationDate = new Date(localStorage.getItem("expirationDate"))
            if (expirationDate <= new Date()) {
                dispatch(logout())
            } else {
                dispatch(authSuccess(token))
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000)) 
            }
        }
    }
}