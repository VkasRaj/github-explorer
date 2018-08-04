import React, { Component } from "react";
import { connect } from "react-redux";

import SignupForm from "../components/Forms/Signup";
import { signup } from "../store/actions/index";

class Signup extends Component {
	onSignUp = values => {
		const { userSignUp } = this.props;

		userSignUp(values, () => {
			console.log("[Redirect]");
		});
	};

	render() {
		const { onSignUp } = this;

		return <SignupForm onSubmit={onSignUp} />;
	}
}

const mapDispatchToProps = dispatch => ({
	userSignUp: (v, cb) => dispatch(signup(v, cb))
});

export default connect(
	null,
	mapDispatchToProps
)(Signup);
