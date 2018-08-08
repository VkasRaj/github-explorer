import React, { Component } from "react";
import Route from "react-router-dom/Route";
import Redirect from "react-router-dom/Redirect";

class PublicRoute extends Component {
    render() {
        const { isAuth, component: Component, ...rest } = this.props;
        const { from } = this.props.location.state || {
            from: { pathname: "/search" }
        };

        return (
            <Route
                {...rest}
                render={props =>
                    isAuth ? <Redirect to={from} /> : <Component {...props} />
                }
            />
        );
    }
}

export default PublicRoute;
