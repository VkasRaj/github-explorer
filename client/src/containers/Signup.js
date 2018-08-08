import React, { Component } from "react";
import { connect } from "react-redux";

import SignupForm from "../components/Forms/Signup";
import { signup } from "../store/actions";

class Signup extends Component {
    onSignUp = values => {
        const { userSignUp } = this.props;

        userSignUp(values, () => {
            console.log("[Redirect]");
        });
    };

    render() {
        const {
            onSignUp,
            props: { error }
        } = this;

        return <SignupForm onSubmit={onSignUp} formError={error} />;
    }
}

const mapStateToProps = state => ({
    error: state.user.error.signup
});

const mapDispatchToProps = dispatch => ({
    userSignUp: (v, cb) => dispatch(signup(v, cb))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Signup);
