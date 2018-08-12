import React from "react";
import IconButton from "@material-ui/core/IconButton";
import CircularProgress from "@material-ui/core/CircularProgress";

const LoadingIconButton = ({ loading, children, ...props }) => {
    return (
        <IconButton {...props}>
            {loading ? <CircularProgress size={20} thickness={4} /> : children}
        </IconButton>
    );
};

export default LoadingIconButton;
