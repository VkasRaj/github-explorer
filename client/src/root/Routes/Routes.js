import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../../views/Home";
import Signup from "../../views/Signup";
import Login from "../../views/Login";

class Routes extends Component {
	render() {
		return (
			<Switch>
				<Route path="/login" component={Login} />
				<Route path="/signup" component={Signup} />
				<Route exact path="/" component={Home} />
			</Switch>
		);
	}
}

export default Routes;
