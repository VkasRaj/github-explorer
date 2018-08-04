const express = require("express");
const router = express.Router();

const isAuthenticate = require("../middlewares/authRoutes");
const { userSignup, userLogin, userLogout } = require("../controllers/user");

router.post("/signup", userSignup);

router.post("/login", userLogin);

router.get("/logout", isAuthenticate, userLogout);

module.exports = router;
