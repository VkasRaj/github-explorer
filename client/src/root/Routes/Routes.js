import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "../../views/Home";
import Signup from "../../views/Signup";
import Login from "../../views/Login";
import Search from "../../views/Search";

class Routes extends Component {
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

export default Routes;
