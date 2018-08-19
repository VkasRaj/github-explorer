import React, { Component } from "react";
import BrowserRouter from "react-router-dom/BrowserRouter";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";

import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import CssBaseline from "@material-ui/core/CssBaseline";
import grey from "@material-ui/core/colors/grey";

import reducers from "../store/reducers/index";
import Routes from "./Routes/Routes";
import { watchUserSaga, watchSearchSaga } from "../store/sagas/index";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const REDUCER = combineReducers(reducers);

const SAGA = createSagaMiddleware();

const STORE = createStore(
    REDUCER,
    composeEnhancers(applyMiddleware(thunk, SAGA))
);

SAGA.run(watchUserSaga);
SAGA.run(watchSearchSaga);

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
