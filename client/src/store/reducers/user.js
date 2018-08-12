import { USER_SUCCESS, USER_LOGOUT } from "../actions/actionTypes";

const initState = {
    user: null
};

const userSuccess = (state, { user }) => ({ ...state, loading: false, user });

const userLogout = (state, action) => ({ user: null });

const reducer = (state = initState, { type, ...action }) => {
    switch (type) {
        case USER_SUCCESS:
            return userSuccess(state, action);
        case USER_LOGOUT:
            return userLogout(state, action);
        default:
            return state;
    }
};

export default reducer;
