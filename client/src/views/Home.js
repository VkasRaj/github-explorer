import React, { Component } from "react";
import { Button, Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";

import FormLayout from "../components/Forms/FormLayout";

class Home extends Component {
    render() {
        return (
            <FormLayout>
                <Typography paragraph>
                    <Button
                        fullWidth
                        color="primary"
                        variant="contained"
                        component={NavLink}
                        to="/login"
                    >
                        Login
                    </Button>
                </Typography>
                <Typography paragraph>
                    <Button
                        fullWidth
                        variant="outlined"
                        component={NavLink}
                        to="/signup"
                    >
                        Signup
                    </Button>
                </Typography>
            </FormLayout>
        );
    }
}

export default Home;
