import React, { Component, Fragment } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { reduxForm, Field, Form } from "redux-form";

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

class Login extends Component {
    render() {
        const {
            classes,
            loading,
            handleSubmit,
            pristine,
            formError
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
                        name="email"
                        label="Email"
                        placeholder="johndoe@email.com"
                        type="email"
                        component={inputField}
                    />
                    <Field
                        name="password"
                        label="Password"
                        placeholder="It should be correct"
                        type="password"
                        component={inputField}
                    />
                    <LoadingButton loading={loading} pristine={pristine} />
                </Form>
            </Fragment>
        );
    }
}

Login = reduxForm({
    form: "login",
    validate
})(Login);

export default withStyles(styles)(Login);
