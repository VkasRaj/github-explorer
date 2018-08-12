import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";

import SearchForm from "../../components/Forms/Search";
import { search } from "../../store/actions";

class Search extends Component {
    state = { error: null };

    onSearch = (values, actions) => {
        const {
            props: { githubSearch },
            state: { error }
        } = this;

        error && this.setState({ error: null });

        githubSearch(values, error => {
            this.setState({ error });
            actions.setSubmitting(false);
        });
    };

    render() {
        const {
            onSearch,
            state: { error }
        } = this;

        return (
            <Fragment>
                <SearchForm onSubmit={onSearch} />

                {error && (
                    <Typography
                        paragraph
                        align="center"
                        variant="body2"
                        color="error"
                    >
                        {error}
                    </Typography>
                )}
            </Fragment>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    githubSearch: (v, cb) => dispatch(search(v, cb))
});

export default connect(
    null,
    mapDispatchToProps
)(Search);
