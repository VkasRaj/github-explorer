import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";

const Loader = () => (
	<Grid
		container
		justify="center"
		alignItems="center"
		style={{
			height: "100vh"
		}}
	>
		<CircularProgress color="primary" />
	</Grid>
);

export default Loader;
