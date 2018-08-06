import {
    FETCH_REPO_START,
    FETCH_REPO_SUCCESS,
    FETCH_REPO_FAIL,
    FETCH_SEARCH_LIST
} from "../actions/actionTypes";

const intiState = {
    repos: null,
    loading: false,
    error: null,
    lastSearch: null
};

const repoStart = (state, action) => ({ ...state, loading: true, error: null });

const repoSuccess = (state, { repos }) => ({
    ...state,
    loading: false,
    repos,
    error: null
});

const repoFail = (state, { error }) => ({ ...state, loading: false, error });

const searchList = (state, { list }) => ({ ...state, lastSearch: list });

const reducer = (state = intiState, { type, ...action }) => {
    switch (type) {
        case FETCH_REPO_START:
            return repoStart(state, action);
        case FETCH_REPO_SUCCESS:
            return repoSuccess(state, action);
        case FETCH_REPO_FAIL:
            return repoFail(state, action);
        case FETCH_SEARCH_LIST:
            return searchList(state, action);
        default:
            return state;
    }
};

export default reducer;
