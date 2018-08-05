import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { asyncComponent } from "react-async-component";
import { Grid, LinearProgress } from "@material-ui/core";

const ReposList = asyncComponent({
    resolve: () => import("../components/Repos/Repos")
});

class Repos extends Component {
    render() {
        const { repos, reposLoading } = this.props;

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
                {repos && <ReposList repos={repos} />}
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    repos: state.github.repos,
    reposLoading: state.github.loading
});

export default connect(mapStateToProps)(Repos);
