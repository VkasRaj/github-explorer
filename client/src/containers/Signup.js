import React, { Component } from "react";
import { connect } from "react-redux";
import Redirect from "react-router-dom/Redirect";

import SignupForm from "../components/Forms/Signup";
import { signup } from "../store/actions";

class Signup extends Component {
    state = {
        redirectLogin: false
    };

    onSignUp = values => {
        const { userSignUp } = this.props;

        userSignUp(values, () => {
            this.setState({ redirectLogin: true });
        });
    };

    render() {
        const {
            onSignUp,
            state: { redirectLogin },
            props: { error }
        } = this;

        return redirectLogin ? (
            <Redirect to="/login" />
        ) : (
            <SignupForm onSubmit={onSignUp} formError={error} />
        );
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
