import React, { Component, Fragment } from "react";
import { Form, Field, reduxForm } from "redux-form";

import { InputAdornment, IconButton } from "@material-ui/core";
import { SearchOutlined as SearchIcon } from "@material-ui/icons";

import { inputField } from "./formControls";

class Search extends Component {
    render() {
        const { handleSubmit, pristine } = this.props;

        return (
            <Fragment>
                <Form onSubmit={handleSubmit} noValidate>
                    <Field
                        name="search"
                        label="Search Github"
                        placeholder="Enter your preffered or any language"
                        type="text"
                        component={inputField}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        disabled={pristine}
                                        color="primary"
                                        type="submit"
                                    >
                                        <SearchIcon />
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />
                </Form>
            </Fragment>
        );
    }
}

Search = reduxForm({
    form: "search"
})(Search);

export default Search;
