import React, { Component } from "react";

import FormLayout from "../components/Forms/FormLayout";
import SignupForm from "../components/Forms/Signup";

class Signup extends Component {
	onSignUp = values => {
		console.log(values);
	};

	render() {
		const { onSignUp } = this;

		return (
			<FormLayout>
				<SignupForm onSubmit={onSignUp} />
			</FormLayout>
		);
	}
}

export default Signup;
