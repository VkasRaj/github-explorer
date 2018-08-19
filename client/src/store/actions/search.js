import {
    FETCH_REPO_SUCCESS,
    FETCH_SEARCH_LIST,
    FETCH_SEARCH,
    FETCH_LIST
} from "./actionTypes";

/* For Sagas */

export const search = ({ search }, cb) => ({ type: FETCH_SEARCH, search, cb });

export const onSearchList = () => ({ type: FETCH_LIST });

/* For Reducers */

export const repoSuccess = repos => ({ type: FETCH_REPO_SUCCESS, repos });

export const searchList = list => ({ type: FETCH_SEARCH_LIST, list });
