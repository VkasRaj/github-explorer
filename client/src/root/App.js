import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import {
	MuiThemeProvider,
	createMuiTheme,
	CssBaseline
} from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";

import reducers from "../store/reducers/index";
import Routes from "./Routes/Routes";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const REDUCER = combineReducers(reducers);

const STORE = createStore(REDUCER, composeEnhancers(applyMiddleware(thunk)));

const THEME = createMuiTheme({
	overrides: {
		MuiButton: {
			root: {
				borderRadius: "10rem"
			},
			raised: {
				boxShadow: "none"
			}
		},
		MuiAppBar: {
			root: {
				boxShadow: "none"
			}
		}
	},
	palette: {
		primary: {
			main: grey[900]
		},
		secondary: {
			main: grey[300]
		},
		background: {
			default: "#fff"
		}
	},
	typography: {
		fontFamily: [
			"-apple-system",
			"BlinkMacSystemFont",
			'"Segoe UI"',
			"Roboto",
			'"Helvetica Neue"',
			"Arial",
			"sans-serif",
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"'
		].join(",")
	}
});

class App extends Component {
	render() {
		return (
			<Provider store={STORE}>
				<BrowserRouter>
					<MuiThemeProvider theme={THEME}>
						<CssBaseline />
						<Routes />
					</MuiThemeProvider>
				</BrowserRouter>
			</Provider>
		);
	}
}

export default App;
