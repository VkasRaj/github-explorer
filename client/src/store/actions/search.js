import axios from "axios";

import { FETCH_REPO_SUCCESS, FETCH_SEARCH_LIST } from "./actionTypes";

const repoSuccess = repos => ({ type: FETCH_REPO_SUCCESS, repos });

const searchList = list => ({ type: FETCH_SEARCH_LIST, list });

export const search = ({ search }) => {
    return dispatch => {
        axios
            .post("/api/user/search", { search })
            .then(({ data: { items } }) => {
                dispatch(repoSuccess(items));
            })
            .catch(error => {
                throw error;
            });
    };
};

export const onSearchList = () => {
    return dispatch => {
        axios
            .get("/api/user/search")
            .then(({ data: { result } }) => {
                dispatch(searchList(result));
            })
            .catch(error => {
                throw error;
            });
    };
};
