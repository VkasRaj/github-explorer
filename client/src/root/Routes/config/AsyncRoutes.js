import React from "react";
import { asyncComponent } from "react-async-component";

import Loader from "../../../components/Loader";

export const Home = asyncComponent({
    resolve: () => import("../../../views/Home"),
    LoadingComponent: () => <Loader />
});

export const Signup = asyncComponent({
    resolve: () => import("../../../views/Signup"),
    LoadingComponent: () => <Loader />
});

export const Login = asyncComponent({
    resolve: () => import("../../../views/Login"),
    LoadingComponent: () => <Loader />
});

export const Search = asyncComponent({
    resolve: () => import("../../../views/Search"),
    LoadingComponent: () => <Loader />
});
