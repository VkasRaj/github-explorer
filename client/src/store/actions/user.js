import axios from "axios";
import { USER_START, USER_SUCCESS, USER_FAIL } from "./actionTypes";

const userStart = () => ({ type: USER_START });

const userFail = () => ({ type: USER_FAIL });

const userSuccess = user => ({ type: USER_SUCCESS, user });

export const signup = (values, cb) => {
	return dispatch => {
		dispatch(userStart());
		axios
			.post("/api/user/signup", values)
			.then(() => {
				dispatch(userSuccess(null));
				if (cb) {
					cb();
				}
			})
			.catch(error => {
				dispatch(userFail(error));
			});
	};
};

export const login = (values, cb) => {
	return dispatch => {
		dispatch(userStart());
		axios
			.post("/api/user/login", values)
			.then(({ data: { user } }) => {
				dispatch(userSuccess(user));
				if (cb) {
					cb(user);
				}
			})
			.catch(error => {
				dispatch(userFail(error));
			});
	};
};

export const autoSignIn = cb => {
	return dispatch => {
		dispatch(userStart());
		axios
			.get("/api/user/authenticate")
			.then(({ data: { user } }) => {
				dispatch(userSuccess(user));
				if (cb) {
					cb(user);
				}
			})
			.catch(error => {
				dispatch(userFail(error));
			});
	};
};