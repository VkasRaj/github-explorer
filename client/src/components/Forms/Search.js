import React, { Fragment } from "react";
import { Formik, Field } from "formik";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/SearchOutlined";

import InputField from "./FormControls/InputField";

const Search = ({ onSubmit }) => {
    return (
        <Formik
            onSubmit={onSubmit}
            initialValues={{
                search: ""
            }}
            render={({ handleSubmit, dirty, ...props }) => {
                return (
                    <Fragment>
                        <form onSubmit={handleSubmit} noValidate>
                            <Field
                                name="search"
                                label="Search Github"
                                placeholder="Enter your preffered or any language"
                                type="text"
                                component={InputField}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                disabled={!dirty}
                                                color="primary"
                                                type="submit"
                                            >
                                                <SearchIcon />
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </form>
                    </Fragment>
                );
            }}
        />
    );
};

export default Search;
