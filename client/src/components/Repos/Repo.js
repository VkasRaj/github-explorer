import React from "react";
import { Paper } from "@material-ui/core";

const Repo = ({ repo }) => {
    return <Paper>{repo.name}</Paper>;
};

export default Repo;
