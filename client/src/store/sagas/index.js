import { takeEvery, takeLatest, all } from "redux-saga/effects";

import {
    USER_LOGIN,
    USER_LOGOUT,
    USER_AUTO_SIGNIN
} from "../actions/actionTypes";
import { login, logout, autoSignIn } from "./user";

export function* watchSagas() {
    yield all([
        takeLatest(USER_LOGIN, login),
        takeLatest(USER_LOGOUT, logout),
        takeEvery(USER_AUTO_SIGNIN, autoSignIn)
    ]);
}
