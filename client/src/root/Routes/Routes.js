import React, { Component } from "react";
import { withRouter, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Home from "../../views/Home";
import Signup from "../../views/Signup";
import Login from "../../views/Login";
import Search from "../../views/Search";
import { autoSignIn } from "../../store/actions/index";

class Routes extends Component {
	componentDidMount() {
		const { autoSignIn } = this.props;
		console.log(1);

		autoSignIn();
	}

	render() {
		return (
			<Switch>
				<Route path="/search" component={Search} />
				<Route path="/login" component={Login} />
				<Route path="/signup" component={Signup} />
				<Route exact path="/" component={Home} />
				<Redirect to="/" />
			</Switch>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	autoSignIn: () => dispatch(autoSignIn())
});

export default withRouter(
	connect(
		null,
		mapDispatchToProps
	)(Routes)
);
