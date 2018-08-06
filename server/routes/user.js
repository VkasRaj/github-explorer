const express = require("express");
const router = express.Router();

const isAuthenticate = require("../middlewares/authRoutes");
const {
    userSignup,
    userLogin,
    userLogout,
    userAutoSignIn,
    userSearch,
    userSearchList
} = require("../controllers/user");

router.post("/signup", userSignup);

router.post("/login", userLogin);

router.get("/search", isAuthenticate, userSearchList);

router.post("/search", isAuthenticate, userSearch);

router.get("/authenticate", isAuthenticate, userAutoSignIn);

router.get("/logout", isAuthenticate, userLogout);

module.exports = router;
