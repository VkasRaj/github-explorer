import React, { Fragment, PureComponent } from "react";
import { Formik, Field } from "formik";

import InputField from "./FormControls/InputField";
import LoadingButton from "./FormControls/LoadingButton";
import validate from "./config/signupValidation";

class Signup extends PureComponent {
    render() {
        const { onSubmit } = this.props;
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
                render={({ handleSubmit, dirty, isSubmitting, ...props }) => {
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
                                <LoadingButton
                                    loading={isSubmitting}
                                    disabled={!dirty || isSubmitting}
                                >
                                    Signup
                                </LoadingButton>
                            </form>
                        </Fragment>
                    );
                }}
            />
        );
    }
}

export default Signup;
