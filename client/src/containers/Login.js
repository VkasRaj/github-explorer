import React, { Component } from "react";
import { connect } from "react-redux";

import LoginForm from "../components/Forms/Login";
import { login } from "../store/actions/user";

class Login extends Component {
	onLogin = values => {
		const { userLogin } = this.props;

		userLogin(values, () => {
			console.log("[Redirect]");
		});
	};

	render() {
		const { onLogin } = this;
		return <LoginForm onSubmit={onLogin} />;
	}
}

const mapDispatchToProps = dispatch => ({
	userLogin: (v, cb) => dispatch(login(v, cb))
});

export default connect(
	null,
	mapDispatchToProps
)(Login);
