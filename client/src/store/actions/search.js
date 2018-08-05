import axios from "axios";

import {
    FETCH_REPO_START,
    FETCH_REPO_SUCCESS,
    FETCH_REPO_FAIL
} from "./actionTypes";

const repoStart = () => ({ type: FETCH_REPO_START });

const repoSuccess = repos => ({ type: FETCH_REPO_SUCCESS, repos });

const repoFail = error => ({ type: FETCH_REPO_FAIL, error });

export const search = ({ search }) => {
    return dispatch => {
        dispatch(repoStart());
        axios
            .post("/api/user/search", { search })
            .then(({ data: { items } }) => {
                dispatch(repoSuccess(items));
            })
            .catch(error => {
                dispatch(repoFail(error));
            });
    };
};
