const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

/* Firing up Server */
app.listen(PORT, () => {
	console.log(`Server is up on port: ${PORT}`);
});
