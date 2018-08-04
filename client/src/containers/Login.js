import React, { Component } from "react";
import LoginForm from "../components/Forms/Login";

class Login extends Component {
	onLogin = values => {
		console.log(values);
	};

	render() {
		const { onLogin } = this;
		return <LoginForm onSubmit={onLogin} />;
	}
}

export default Login;
