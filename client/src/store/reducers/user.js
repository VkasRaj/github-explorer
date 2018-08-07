import {
    USER_START,
    USER_FAIL,
    USER_SUCCESS,
    USER_LOGOUT
} from "../actions/actionTypes";

const initState = {
    user: null,
    loading: false,
    error: {}
};

const userStart = (state, action) => ({ ...state, loading: true });

const userSuccess = (state, { user }) => ({ ...state, loading: false, user });

const userFail = (state, { error }) => ({ ...state, loading: false, error });

const userLogout = (state, action) => ({
    user: null,
    loading: false,
    error: {}
});

const reducer = (state = initState, { type, ...action }) => {
    switch (type) {
        case USER_START:
            return userStart(state, action);
        case USER_SUCCESS:
            return userSuccess(state, action);
        case USER_LOGOUT:
            return userLogout(state, action);
        case USER_FAIL:
            return userFail(state, action);
        default:
            return state;
    }
};

export default reducer;
