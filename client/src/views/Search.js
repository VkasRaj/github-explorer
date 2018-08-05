import React, { Component, Fragment } from "react";
import FormLayout from "../components/Forms/FormLayout";

import SearchContainer from "../containers/Search/Search";
import Repos from "../containers/Search/Repos";
import SearchLoader from "../containers/Search/SearchLoader";
import Info from "../containers/Search/Info";

class Search extends Component {
    render() {
        return (
            <Fragment>
                <FormLayout style={{ marginBottom: "1rem" }}>
                    <SearchContainer />
                </FormLayout>
                <SearchLoader />
                <Repos />
                <Info />
            </Fragment>
        );
    }
}

export default Search;
