import React from "react";
import TextField from "@material-ui/core/TextField";

const InputField = ({
    field, // { name, value, onChange, onBlur }
    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    ...props
}) => {
    const error = errors[field.name];
    return (
        <TextField
            margin="normal"
            error={touched && error ? true : false}
            helperText={touched && error ? error : null}
            InputLabelProps={{ shrink: true }}
            fullWidth
            {...field}
            {...props}
        />
    );
};

export default InputField;
