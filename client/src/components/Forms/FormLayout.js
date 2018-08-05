import React from "react";
import { Grid, withStyles } from "@material-ui/core";

const styles = ({ palette: { primary } }) => ({
    form: {
        marginTop: "5rem"
    }
});

const FormLayout = ({ children, classes: { form }, ...props }) => {
    return (
        <Grid container justify="center" {...props}>
            <Grid item xs={9} sm={5} md={3} classes={{ item: form }}>
                {children}
            </Grid>
        </Grid>
    );
};

export default withStyles(styles)(FormLayout);
