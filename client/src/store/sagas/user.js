import axios from "axios";
import { put } from "redux-saga/effects";

import { userSuccess, userLogout } from "../actions/user";

export function* login({ values, cb }) {
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

export function* logout() {
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

export function* autoSignIn({ cb }) {
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
