import axios from "axios";
import { USER_SUCCESS, USER_LOGOUT } from "./actionTypes";

const userSuccess = user => ({ type: USER_SUCCESS, user });

const userLogout = () => ({ type: USER_LOGOUT });

export const login = (values, cb) => {
    return dispatch => {
        axios
            .post("/api/user/login", values)
            .then(({ data: { user } }) => {
                dispatch(userSuccess(user));
                cb && cb(null, user);
            })
            .catch(({ response: { data: { error } } }) => {
                cb && cb(error, null);
            });
    };
};

export const logout = () => {
    return dispatch => {
        axios
            .get("/api/user/logout")
            .then(() => {
                dispatch(userLogout());
            })
            .catch(({ response: { data: { error } } }) => {
                throw error;
            });
    };
};

export const autoSignIn = cb => {
    return dispatch => {
        axios
            .get("/api/user/authenticate")
            .then(({ data: { user } }) => {
                dispatch(userSuccess(user));
                cb && cb(null, user);
            })
            .catch(({ response: { data: { error } } }) => {
                cb && cb(error, null);
            });
    };
};
