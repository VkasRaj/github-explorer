const mongoose = require("mongoose");

const User = mongoose.Schema({
	name: {
		type: String,
		required: true,
		maxlength: 15,
		trim: true
	},
	email: {
		type: String,
		required: true,
		unique: true,
		match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
	},
	password: {
		type: String,
		required: true,
		minlength: 6,
		trim: true
	}
});

module.exports = mongoose.model("User", User);
