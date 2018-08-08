import React, { Component } from "react";
import withRouter from "react-router-dom/withRouter";
import Switch from "react-router-dom/Switch";
import Redirect from "react-router-dom/Redirect";
import { connect } from "react-redux";

import { Home, Signup, Login, Search } from "./config/AsyncRoutes";

import Private from "./config/PrivateRoute";
import Public from "./config/PublicRoute";

import { autoSignIn } from "../../store/actions";

class Routes extends Component {
    componentDidMount() {
        const { autoSignIn } = this.props;

        autoSignIn();
    }

    render() {
        const { isAuth } = this.props;

        return (
            <Switch>
                <Private isAuth={isAuth} path="/search" component={Search} />
                <Public isAuth={isAuth} path="/login" component={Login} />
                <Public isAuth={isAuth} path="/signup" component={Signup} />
                <Public isAuth={isAuth} exact path="/" component={Home} />
                <Redirect to="/" />
            </Switch>
        );
    }
}

const mapStateToProps = state => ({
    isAuth: state.user.user ? true : false
});

const mapDispatchToProps = dispatch => ({
    autoSignIn: () => dispatch(autoSignIn())
});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Routes)
);
