import axios from "axios";

export const search = ({ search }) => {
	return dispatch => {
		axios
			.get(
				`https://api.github.com/search/repositories?q=language:${search}&sort=stars&order=desc`
			)
			.then(result => {
				console.log(result);
			})
			.catch(error => {
				console.log(error);
			});
	};
};
