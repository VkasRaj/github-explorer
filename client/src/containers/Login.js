import React, { Component } from "react";
import { connect } from "react-redux";

import LoginForm from "../components/Forms/Login";
import { login } from "../store/actions";

class Login extends Component {
    onLogin = values => {
        const { userLogin } = this.props;

        userLogin(values, () => {
            console.log("[Redirect]");
        });
    };

    render() {
        const {
            onLogin,
            props: { error }
        } = this;
        return <LoginForm onSubmit={onLogin} formError={error} />;
    }
}

const mapStateToProps = state => ({
    error: state.user.error.login
});

const mapDispatchToProps = dispatch => ({
    userLogin: (v, cb) => dispatch(login(v, cb))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
