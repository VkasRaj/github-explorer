import { FETCH_REPO_SUCCESS, FETCH_SEARCH_LIST } from "../actions/actionTypes";

const intiState = {
    repos: null,
    lastSearch: null
};

const repoSuccess = (state, { repos }) => ({
    ...state,
    repos
});

const searchList = (state, { list }) => ({ ...state, lastSearch: list });

const reducer = (state = intiState, { type, ...action }) => {
    switch (type) {
        case FETCH_REPO_SUCCESS:
            return repoSuccess(state, action);
        case FETCH_SEARCH_LIST:
            return searchList(state, action);
        default:
            return state;
    }
};

export default reducer;
