import React, { Component, Fragment } from "react";
import FormLayout from "../components/Forms/FormLayout";

import SearchContainer from "../containers/Search/Search";
import Repos from "../containers/Search/Repos";
import SearchLoader from "../containers/Search/SearchLoader";

class Search extends Component {
    render() {
        return (
            <Fragment>
                <FormLayout style={{ marginBottom: "1rem" }}>
                    <SearchContainer />
                </FormLayout>
                <SearchLoader />
                <Repos />
            </Fragment>
        );
    }
}

export default Search;
