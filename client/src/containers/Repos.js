import React, { Component } from "react";
import { connect } from "react-redux";

import ReposList from "../components/Repos/Repos";

class Repos extends Component {
    render() {
        const { repos } = this.props;

        return repos && <ReposList repos={repos} />;
    }
}

const mapStateToProps = state => ({
    repos: state.github.repos
});

export default connect(mapStateToProps)(Repos);
