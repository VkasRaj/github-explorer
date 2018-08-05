import React, { Component, Fragment } from "react";
import FormLayout from "../components/Forms/FormLayout";

import SearchContainer from "../containers/Search";
import Repos from "../containers/Repos";
import RepoLoader from "../components/RepoLoader";

class Search extends Component {
    render() {
        return (
            <Fragment>
                <FormLayout style={{ marginBottom: "1rem" }}>
                    <SearchContainer />
                </FormLayout>
                <RepoLoader />
                <Repos />
            </Fragment>
        );
    }
}

export default Search;
