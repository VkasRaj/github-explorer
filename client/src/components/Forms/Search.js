import React, { Fragment, PureComponent } from "react";
import { Formik, Field } from "formik";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/SearchOutlined";

import InputField from "./FormControls/InputField";
import LoadingIconButton from "./FormControls/LoadingIconButton";

class Search extends PureComponent {
    render() {
        const { onSubmit } = this.props;

        return (
            <Formik
                onSubmit={onSubmit}
                initialValues={{
                    search: ""
                }}
                render={({ handleSubmit, dirty, isSubmitting, ...props }) => {
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
                                                <LoadingIconButton
                                                    color="primary"
                                                    type="submit"
                                                    disabled={
                                                        !dirty || isSubmitting
                                                    }
                                                    loading={isSubmitting}
                                                >
                                                    <SearchIcon />
                                                </LoadingIconButton>
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
    }
}

export default Search;
