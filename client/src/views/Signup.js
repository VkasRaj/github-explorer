import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";

import FormLayout from "../components/Forms/FormLayout";
import SignupContainer from "../containers/Signup";

class Signup extends Component {
    render() {
        return (
            <FormLayout>
                <SignupContainer />
                <Typography
                    variant="caption"
                    align="center"
                    style={{ marginTop: "1rem" }}
                >
                    Have an account? <NavLink to="/login">Login</NavLink>
                </Typography>
            </FormLayout>
        );
    }
}

export default Signup;
