import React, { Component, Fragment } from "react";
import Redirect from "react-router-dom/Redirect";
import axios from "axios";

import SignupForm from "../components/Forms/Signup";
import ErrorPaper from "../components/Forms/FormControls/ErrorPaper";

class Signup extends Component {
    state = {
        redirectLogin: false,
        error: null
    };

    onSignUp = values => {
        this.setState({ error: null });
        axios
            .post("/api/user/signup", values)
            .then(() => {
                this.setState({ redirectLogin: true });
            })
            .catch(({ response: { data: { error } } }) => {
                this.setState({ error });
            });
    };

    render() {
        const {
            onSignUp,
            state: { redirectLogin, error }
        } = this;

        return redirectLogin ? (
            <Redirect to="/login" />
        ) : (
            <Fragment>
                <ErrorPaper error={error} />
                <SignupForm onSubmit={onSignUp} />
            </Fragment>
        );
    }
}

export default Signup;
