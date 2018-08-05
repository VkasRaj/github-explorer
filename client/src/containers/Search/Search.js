import React, { Component } from "react";
import { connect } from "react-redux";

import SearchForm from "../../components/Forms/Search";
import { search } from "../../store/actions";

class Search extends Component {
    onSearch = values => {
        const { githubSearch } = this.props;
        githubSearch(values);
    };

    render() {
        const { onSearch } = this;

        return <SearchForm onSubmit={onSearch} />;
    }
}

const mapDispatchToProps = dispatch => ({
    githubSearch: v => dispatch(search(v))
});

export default connect(
    null,
    mapDispatchToProps
)(Search);
