import React from "react";
import NavLink from "react-router-dom/NavLink";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";

import Logo from "../Logo";

const styles = ({ palette: { primary } }) => ({
    form: {
        marginTop: "5rem"
    }
});

const FormLayout = ({
    children,
    classes: { form },
    logoSize = 50,
    ...props
}) => {
    return (
        <Grid container justify="center" {...props}>
            <Grid item xs={9} sm={5} md={3} classes={{ item: form }}>
                <Typography align="center">
                    <NavLink to="/">
                        <Logo width={logoSize} />
                    </NavLink>
                </Typography>
                <Typography paragraph align="center" variant="body2">
                    Github Explorer
                </Typography>
                {children}
            </Grid>
        </Grid>
    );
};

export default withStyles(styles)(FormLayout);
