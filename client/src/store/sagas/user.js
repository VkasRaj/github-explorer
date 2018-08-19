import axios from "axios";
import { put, takeEvery, takeLatest, all } from "redux-saga/effects";

import {
    USER_LOGIN,
    USER_LOGOUT,
    USER_AUTO_SIGNIN
} from "../actions/actionTypes";
import { userSuccess, userLogout } from "../actions/user";

function* login({ values, cb }) {
    try {
        const {
            data: { user }
        } = yield axios.post("/api/user/login", values);
        yield put(userSuccess(user));
        cb && cb(null, user);
    } catch ({
        response: {
            data: { error }
        }
    }) {
        cb && cb(error, null);
    }
}

function* logout() {
    try {
        yield axios.get("/api/user/logout");
        yield put(userLogout());
    } catch ({
        response: {
            data: { error }
        }
    }) {
        throw error;
    }
}

function* autoSignIn({ cb }) {
    try {
        const {
            data: { user }
        } = yield axios.get("/api/user/authenticate");
        yield user && put(userSuccess(user));
        cb && cb(null, user);
    } catch ({
        response: {
            data: { error }
        }
    }) {
        cb && cb(error, null);
    }
}

export function* watchUserSagas() {
    yield all([
        takeLatest(USER_LOGIN, login),
        takeLatest(USER_LOGOUT, logout),
        takeEvery(USER_AUTO_SIGNIN, autoSignIn)
    ]);
}
