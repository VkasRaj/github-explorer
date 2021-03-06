const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetch = require("node-fetch");

const User = require("../models/user");
const Search = require("../models/search");

const { TOKEN_KEY } = require("../config/keys/index");

const userSignup = (req, res) => {
    const { email, name, password } = req.body;

    User.findOne({ email })
        .then(user => {
            if (user) {
                return res.status(409).send({
                    error: "Email already registered!"
                });
            }

            bcrypt.genSalt(10, (error, salt) => {
                bcrypt.hash(password, salt, (error, hash) => {
                    if (error) {
                        throw error;
                    }
                    const USER = new User({
                        name,
                        email,
                        password: hash
                    });

                    USER.save()
                        .then(user => {
                            res.status(201).send({
                                message: "Successfully registered"
                            });
                        })
                        .catch(error => {
                            res.status(500).send({ error });
                        });
                });
            });
        })
        .catch(error => {
            res.status(500).send({ error });
        });
};

const userLogin = (req, res, next) => {
    const { email, password } = req.body;

    User.findOne({ email })
        .then(user => {
            if (!user) {
                return res.status(400).send({
                    error: "Incorrect email or password"
                });
            }

            const { _id, name, email, password: _password } = user;

            bcrypt.compare(password, _password, (error, isMatch) => {
                if (error) throw error;
                if (isMatch) {
                    const token = jwt.sign({ _id, email }, TOKEN_KEY);

                    return res
                        .status(200)
                        .cookie("TOKEN", token, {
                            sameSite: true,
                            httpOnly: true,
                            expires: ""
                        })
                        .send({
                            message: "Login successfull",
                            user: { _id, name, email },
                            token
                        });
                } else {
                    return res.status(400).send({
                        error: "Incorrect email or password"
                    });
                }
            });
        })
        .catch(error => {
            res.status(500).send({ error });
        });
};

const userLogout = (req, res, next) => {
    res.clearCookie("TOKEN", {
        sameSite: true,
        httpOnly: true,
        expires: ""
    })
        .status(200)
        .send("OK");
};

const userAutoSignIn = (req, res, next) => {
    /* req._user will be attached by isAuthenticate middleware */
    const { _id } = req._user;
    const { TOKEN: token } = req.cookies;

    User.findById(_id)
        .select("_id name email")
        .then(user => {
            if (user) {
                return res.status(200).send({
                    token,
                    user,
                    message: "Authentication Successful"
                });
            } else {
                return res.status(401).send({
                    error: "Unauthorized Access! Please login."
                });
            }
        });
};

const userSearch = (req, res) => {
    const { search } = req.body;
    const { _id } = req._user;

    const SEARCH = new Search({
        query: search,
        author: _id
    });

    SEARCH.save()
        .then(() => {
            fetch(
                `https://api.github.com/search/repositories?q=language:${search}&sort=stars&order=desc&page=1&per_page=10`
            )
                .then(result => result.json())
                .then(body => {
                    res.status(200).send(body);
                })
                .catch(error => {
                    res.status(500).send(error);
                });
        })
        .catch(error => {
            res.status(500).send(error);
        });
};

const userSearchList = (req, res) => {
    const { _id: author } = req._user;

    Search.find({ author })
        .sort({ _id: -1 })
        .limit(5)
        .then(result => {
            res.status(200).send({ message: "Successfull", result });
        })
        .catch(error => {
            res.status(500).send(error);
        });
};

module.exports = {
    userSignup,
    userLogin,
    userLogout,
    userAutoSignIn,
    userSearch,
    userSearchList
};
