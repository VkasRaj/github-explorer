import React from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import CircularProgress from "@material-ui/core/CircularProgress";

export const inputField = ({
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

export const ErrorPaper = ({ error, ...props }) => {
    return error ? (
        <Paper square={true} {...props} elevation={0}>
            <Typography variant="caption" color="inherit" align="center">
                {error}
            </Typography>
        </Paper>
    ) : null;
};

export const LoadingButton = ({ loading, pristine, children, ...props }) => {
    return (
        <FormControl margin="normal" fullWidth>
            <Button
                variant="raised"
                type="Submit"
                color="primary"
                disabled={pristine || loading}
                {...props}
            >
                {loading ? (
                    <CircularProgress size={20} thickness={4} />
                ) : (
                    children
                )}
            </Button>
        </FormControl>
    );
};
