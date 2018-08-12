import React, { Fragment } from "react";
import { Formik, Field } from "formik";

import InputField from "./FormControls/InputField";
import LoadingButton from "./FormControls/LoadingButton";
import validate from "./config/loginValidation";

const Login = ({ onSubmit }) => {
    return (
        <Formik
            onSubmit={onSubmit}
            validate={validate}
            validateOnBlur={false}
            validateOnChange={false}
            initialValues={{ email: "", password: "" }}
            render={({ handleSubmit, dirty, ...props }) => {
                return (
                    <Fragment>
                        <form onSubmit={handleSubmit} noValidate>
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
                                placeholder="It should be correct"
                                type="password"
                                component={InputField}
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

export default Login;
