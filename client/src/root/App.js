import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import reducers from "../store/reducers/index";
import Routes from "./Routes/Routes";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const REDUCER = combineReducers(reducers);

const STORE = createStore(REDUCER, composeEnhancers(applyMiddleware(thunk)));

class App extends Component {
	render() {
		return (
			<Provider store={STORE}>
				<BrowserRouter>
					<Routes />
				</BrowserRouter>
			</Provider>
		);
	}
}

export default App;
