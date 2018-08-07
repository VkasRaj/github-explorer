import React from "react";
import {
    TextField,
    Typography,
    Paper,
    Button,
    FormControl,
    CircularProgress
} from "@material-ui/core";

export const inputField = ({ input, meta: { error, touched }, ...field }) => {
    return (
        <TextField
            {...input}
            {...field}
            margin="normal"
            error={touched && error ? true : false}
            helperText={touched && error ? error : null}
            InputLabelProps={{
                shrink: true
            }}
            fullWidth
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

export const LoadingButton = ({ loading, pristine }) => {
    return (
        <FormControl margin="normal" fullWidth>
            <Button
                variant="raised"
                type="Submit"
                color="primary"
                disabled={pristine || loading}
            >
                {loading ? (
                    <CircularProgress size={20} thickness={4} />
                ) : (
                    "Login"
                )}
            </Button>
        </FormControl>
    );
};
