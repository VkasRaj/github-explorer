import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import withStyles from "@material-ui/core/styles/withStyles";

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

const ErrorPaper = ({ error, classes, ...props }) => {
    return error ? (
        <Paper
            classes={{ root: classes.errorPaper }}
            square={true}
            {...props}
            elevation={0}
        >
            <Typography variant="caption" color="inherit" align="center">
                {error}
            </Typography>
        </Paper>
    ) : null;
};

export default withStyles(styles)(ErrorPaper);
