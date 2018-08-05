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
            .get(
                `https://api.github.com/search/repositories?q=language:${search}&sort=stars&order=desc&page=1&per_page=10`
            )
            .then(({ data: { items } }) => {
                dispatch(repoSuccess(items));
            })
            .catch(error => {
                dispatch(repoFail(error));
            });
    };
};
