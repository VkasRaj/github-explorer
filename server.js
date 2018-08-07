const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT || 5000;
const { MONGO_URI } = require("./server/config/keys/index");

/* Routes Import */
const user = require("./server/routes/user");

/* Express Middlewares */
require("./server/middlewares/express")(app);

/**
 * First create a folder name db in C:\mongodb\data\
 *
 * cmd: "C:\Program Files\MongoDB\Server\3.6\bin\mongod.exe" --port 27017 --dbpath C:\mongodb\data\db
 */

/* Connecting MonogoDB */
mongoose
    .connect(
        MONGO_URI,
        {
            useNewUrlParser: true
        }
    )
    .then(() => console.log("MongoDB successfully connected!"))
    .catch(e => console.log(e));

/* Firing up Server */
app.listen(PORT, () => {
    console.log(`Server is up on port: ${PORT}`);
});

/* Routes Registering */
app.use("/api/user", user);

/* Serving build files if production */
if (process.env.NODE_ENV === "production") {
    app.get("*.js", (req, res, next) => {
        req.url = req.url + ".gz";
        res.set("Content-Encoding", "gzip");
    });
    app.use(express.static(path.resolve(__dirname, "client/build")));
    app.get("*", (req, res) =>
        res.sendFile(path.resolve(__dirname, "client/build", "index.html"))
    );
}
