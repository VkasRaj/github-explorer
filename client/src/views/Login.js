import React, { Component } from "react";
import FormLayout from "../components/Forms/FormLayout";
import LoginContainer from "../containers/Login";

class Login extends Component {
	render() {
		return (
			<FormLayout>
				<LoginContainer />
			</FormLayout>
		);
	}
}

export default Login;
