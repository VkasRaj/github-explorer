import { takeEvery, takeLatest, all } from "redux-saga/effects";

import {
    FETCH_LIST,
    FETCH_SEARCH,
    USER_LOGIN,
    USER_LOGOUT,
    USER_AUTO_SIGNIN
} from "../actions/actionTypes";

import { login, logout, autoSignIn } from "./user";
import { search, getSearchList } from "./search";

export function* watchUserSaga() {
    yield all([
        takeLatest(USER_LOGIN, login),
        takeLatest(USER_LOGOUT, logout),
        takeEvery(USER_AUTO_SIGNIN, autoSignIn)
    ]);
}

export function* watchSearchSaga() {
    yield all([
        takeLatest(FETCH_SEARCH, search),
        takeLatest(FETCH_LIST, getSearchList)
    ]);
}
