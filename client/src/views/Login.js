import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import NavLink from "react-router-dom/NavLink";

import FormLayout from "../components/Forms/FormLayout";
import LoginContainer from "../containers/Login";

class Login extends Component {
    render() {
        return (
            <FormLayout>
                <LoginContainer />
                <Typography
                    variant="caption"
                    align="center"
                    style={{ marginTop: "1rem" }}
                >
                    Not have an account? <NavLink to="/signup">Signup</NavLink>
                </Typography>
            </FormLayout>
        );
    }
}

export default Login;
