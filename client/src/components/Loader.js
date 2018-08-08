import React from "react";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";

const Loader = () => (
    <Grid
        container
        justify="center"
        alignItems="center"
        style={{
            height: "100vh"
        }}
    >
        <CircularProgress color="primary" />
    </Grid>
);

export default Loader;
