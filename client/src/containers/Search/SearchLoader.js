import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";

class Repos extends Component {
    render() {
        const { reposLoading, repoError } = this.props;

        return (
            <Fragment>
                {reposLoading && (
                    <Grid
                        container
                        justify="center"
                        style={{ marginBottom: "1rem" }}
                    >
                        <Grid item xs={10} sm={6} md={3}>
                            <LinearProgress />
                        </Grid>
                    </Grid>
                )}
                {repoError && (
                    <Typography
                        align="center"
                        variant="subheading"
                        color="error"
                        paragraph
                    >
                        Opps.. Something went wrong
                    </Typography>
                )}
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    reposLoading: state.github.loading,
    repoError: state.github.error
});

export default connect(mapStateToProps)(Repos);
