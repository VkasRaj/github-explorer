import {
    FETCH_REPO_START,
    FETCH_REPO_SUCCESS,
    FETCH_REPO_FAIL
} from "../actions/actionTypes";

const intiState = {
    repos: null,
    loading: false,
    error: null
};

const repoStart = (state, action) => ({ ...state, loading: true, error: null });

const repoSuccess = (state, { repos }) => ({
    ...state,
    loading: false,
    repos,
    error: null
});

const repoFail = (state, { error }) => ({ ...state, loading: false, error });

const reducer = (state = intiState, { type, ...action }) => {
    switch (type) {
        case FETCH_REPO_START:
            return repoStart(state, action);
        case FETCH_REPO_SUCCESS:
            return repoSuccess(state, action);
        case FETCH_REPO_FAIL:
            return repoFail(state, action);
        default:
            return state;
    }
};

export default reducer;
