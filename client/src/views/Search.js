import React, { Component, Fragment } from "react";
import FormLayout from "../components/Forms/FormLayout";

import SearchContainer from "../containers/Search";
import Repos from "../containers/Repos";

class Search extends Component {
    render() {
        return (
            <Fragment>
                <FormLayout style={{ marginBottom: "1rem" }}>
                    <SearchContainer />
                </FormLayout>
                <Repos />
            </Fragment>
        );
    }
}

export default Search;
