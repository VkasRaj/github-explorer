import React, { Component } from "react";
import FormLayout from "../components/Forms/FormLayout";
import SignupContainer from "../containers/Signup";

class Signup extends Component {
	render() {
		return (
			<FormLayout>
				<SignupContainer />
			</FormLayout>
		);
	}
}

export default Signup;
