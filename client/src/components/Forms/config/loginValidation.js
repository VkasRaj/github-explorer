/*
== Note:
1) values in validate() will be a object with all values as object when form is submitted.
2) values keys will have to be same as name attribute on input element.
*/

const validate = values => {
    const errors = {};

    // email validation
    if (!values.email) {
        errors.email = "Required";
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
        errors.email = "Invalid email address";
    }

    // password validation
    if (!values.password) {
        errors.password = "Required";
    } else if (values.password.length < 6) {
        errors.password = "Must be 6 characters or more";
    }

    return errors;
};

export default validate;
