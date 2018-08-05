import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Grid, LinearProgress } from "@material-ui/core";

class Repos extends Component {
    render() {
        const { reposLoading } = this.props;

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
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    reposLoading: state.github.loading
});

export default connect(mapStateToProps)(Repos);
