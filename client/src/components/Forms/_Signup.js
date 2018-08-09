import React, { Component, Fragment } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { Form, Field, reduxForm } from "redux-form";

import validate from "./config/validate";
import { inputField, ErrorPaper, LoadingButton } from "./formControls";

const styles = theme => {
    const {
        palette: { error }
    } = theme;
    return {
        errorPaper: {
            background: error.main,
            color: error.contrastText,
            padding: ".5rem 0",
            marginBottom: ".5rem"
        }
    };
};
class SignUp extends Component {
    render() {
        const {
            handleSubmit,
            loading,
            formError,
            pristine,
            classes
        } = this.props;

        return (
            <Fragment>
                <ErrorPaper
                    error={formError}
                    classes={{
                        root: classes.errorPaper
                    }}
                />
                <Form onSubmit={handleSubmit} noValidate>
                    <Field
                        name="name"
                        label="Name"
                        placeholder="John Doe"
                        type="text"
                        component={inputField}
                    />
                    <Field
                        name="email"
                        label="Email"
                        placeholder="johndoe@email.com"
                        type="email"
                        component={inputField}
                    />
                    <Field
                        name="password"
                        label="Password"
                        placeholder="I'll be our secret"
                        type="password"
                        component={inputField}
                    />
                    <LoadingButton loading={loading} pristine={pristine} />
                </Form>
            </Fragment>
        );
    }
}

SignUp = reduxForm({
    form: "signup",
    validate
})(SignUp);

export default withStyles(styles)(SignUp);
