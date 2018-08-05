import React from "react";

import Repo from "./Repo";

const Repos = ({ repos }) => {
    const list = repos.map(({ id, ...repo }) => <Repo key={id} repo={repo} />);

    return list;
};

export default Repos;
