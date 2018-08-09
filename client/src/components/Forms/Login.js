import React, { Fragment } from "react";
import { Formik, Field } from "formik";
import withStyles from "@material-ui/core/styles/withStyles";

import { _inputField, ErrorPaper, LoadingButton } from "./formControls";

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

const Login = ({ onSubmit, formError, classes }) => {
    return (
        <Formik
            onSubmit={onSubmit}
            initialValues={{
                email: "",
                password: ""
            }}
            render={({ handleSubmit, dirty, ...props }) => {
                return (
                    <Fragment>
                        <ErrorPaper
                            error={formError}
                            classes={{
                                root: classes.errorPaper
                            }}
                        />
                        <form onSubmit={handleSubmit} noValidate>
                            <Field
                                name="email"
                                label="Email"
                                placeholder="johndoe@email.com"
                                type="email"
                                component={_inputField}
                            />
                            <Field
                                name="password"
                                label="Password"
                                placeholder="It should be correct"
                                type="password"
                                component={_inputField}
                            />
                            <LoadingButton pristine={!dirty}>
                                Login
                            </LoadingButton>
                        </form>
                    </Fragment>
                );
            }}
        />
    );
};

export default withStyles(styles)(Login);
