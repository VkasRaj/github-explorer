import React, { Fragment } from "react";
import { Formik, Field } from "formik";
import withStyles from "@material-ui/core/styles/withStyles";

import InputField from "./FormControls/InputField";
import LoadingButton from "./FormControls/LoadingButton";
import validate from "./config/loginValidation";

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

const Login = ({ onSubmit }) => {
    return (
        <Formik
            onSubmit={onSubmit}
            validate={validate}
            validateOnBlur={false}
            validateOnChange={false}
            initialValues={{
                name: "",
                email: "",
                password: ""
            }}
            render={({ handleSubmit, dirty, ...props }) => {
                return (
                    <Fragment>
                        <form onSubmit={handleSubmit} noValidate>
                            <Field
                                name="name"
                                label="Name"
                                placeholder="John Doe"
                                type="text"
                                component={InputField}
                            />
                            <Field
                                name="email"
                                label="Email"
                                placeholder="johndoe@email.com"
                                type="email"
                                component={InputField}
                            />
                            <Field
                                name="password"
                                label="Password"
                                placeholder="I'll be our secret"
                                type="password"
                                component={InputField}
                            />
                            <LoadingButton pristine={!dirty}>
                                Signup
                            </LoadingButton>
                        </form>
                    </Fragment>
                );
            }}
        />
    );
};

export default withStyles(styles)(Login);
