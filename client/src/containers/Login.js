import React, { Component } from "react";
import { connect } from "react-redux";

import LoginForm from "../components/Forms/Login";
import { login } from "../store/actions";

class Login extends Component {
    state = {
        error: null
    };

    onLogin = values => {
        const {
            state: { error },
            props: { userLogin }
        } = this;

        error && this.setState({ error: null });

        userLogin(values, error => {
            error && this.setState({ error });
        });
    };

    render() {
        const {
            onLogin,
            state: { error }
        } = this;
        return <LoginForm onSubmit={onLogin} formError={error} />;
    }
}

const mapDispatchToProps = dispatch => ({
    userLogin: (v, cb) => dispatch(login(v, cb))
});

export default connect(
    null,
    mapDispatchToProps
)(Login);
