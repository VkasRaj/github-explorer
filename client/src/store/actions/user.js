import {
    USER_SUCCESS,
    USER_LOGOUT,
    USER_LOGIN,
    USER_LOGOUT_SUCCESS,
    USER_AUTO_SIGNIN
} from "./actionTypes";

/* Actions for initiating sagas */

export const login = (values, cb) => ({ type: USER_LOGIN, values, cb });

export const logout = () => ({ type: USER_LOGOUT });

export const autoSignIn = cb => ({ type: USER_AUTO_SIGNIN, cb });

/* Actions for mutating store via reducers */

export const userSuccess = user => ({ type: USER_SUCCESS, user });

export const userLogout = () => ({ type: USER_LOGOUT_SUCCESS });
