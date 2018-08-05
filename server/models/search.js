const mongoose = require("mongoose");

const Search = mongoose.Schema({
    query: {
        type: String,
        required: true,
        trim: true
    },
    author: {
        required: true,
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    }
});

module.exports = mongoose.model("Search", Search);
