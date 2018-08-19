import axios from "axios";
import { put } from "redux-saga/effects";

import { repoSuccess, searchList } from "../actions/search";

export function* search({ search, cb }) {
    try {
        const {
            data: { items }
        } = yield axios.post("/api/user/search", { search });
        yield put(repoSuccess(items));
        cb && cb(null, items);
    } catch (error) {
        cb && cb("Oopps.. Something went wrong", null);
    }
}

export function* getSearchList() {
    try {
        const {
            data: { result }
        } = yield axios.get("/api/user/search");
        yield put(searchList(result));
    } catch (error) {
        throw error;
    }
}
