import React, { Component } from "react";
import Route from "react-router-dom/Route";
import Redirect from "react-router-dom/Redirect";

class PrivateRoute extends Component {
    render() {
        const { isAuth, component: Component, ...rest } = this.props;
        return (
            <Route
                {...rest}
                render={props => {
                    return isAuth ? (
                        <Component {...props} />
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/",
                                state: {
                                    from: props.location
                                }
                            }}
                        />
                    );
                }}
            />
        );
    }
}

export default PrivateRoute;
