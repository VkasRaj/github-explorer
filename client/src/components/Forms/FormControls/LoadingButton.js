import React from "react";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import CircularProgress from "@material-ui/core/CircularProgress";

const LoadingButton = ({ loading, pristine, children, ...props }) => {
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

export default LoadingButton;
