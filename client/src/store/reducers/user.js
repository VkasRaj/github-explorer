import { USER_SUCCESS, USER_LOGOUT_SUCCESS } from "../actions/actionTypes";

const initState = {
    user: null
};

const userSuccess = (state, { user }) => ({ ...state, user });

const userLogout = (state, action) => ({ user: null });

const reducer = (state = initState, { type, ...action }) => {
    switch (type) {
        case USER_SUCCESS:
            return userSuccess(state, action);
        case USER_LOGOUT_SUCCESS:
            return userLogout(state, action);
        default:
            return state;
    }
};

export default reducer;
