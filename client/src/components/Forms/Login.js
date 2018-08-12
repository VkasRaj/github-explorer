import React, { Fragment, PureComponent } from "react";
import { Formik, Field } from "formik";

import InputField from "./FormControls/InputField";
import LoadingButton from "./FormControls/LoadingButton";
import validate from "./config/loginValidation";

class Login extends PureComponent {
    render() {
        const { onSubmit } = this.props;

        return (
            <Formik
                onSubmit={onSubmit}
                validate={validate}
                validateOnBlur={false}
                validateOnChange={false}
                initialValues={{ email: "", password: "" }}
                render={({ handleSubmit, dirty, isSubmitting, ...props }) => {
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
                                <LoadingButton
                                    loading={isSubmitting}
                                    disabled={!dirty || isSubmitting}
                                >
                                    Login
                                </LoadingButton>
                            </form>
                        </Fragment>
                    );
                }}
            />
        );
    }
}

export default Login;
