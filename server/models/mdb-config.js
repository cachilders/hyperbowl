const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
	_id: ObjectId,
	gitHandle: {
		type: String,
		required: true
	},
	githubId: Number,
	accessToken: String,
	refreshToken: String,
	created: Date,
	avatar_url: String,
});

const Users = mongoose.model('Users', userSchema);

module.exports = { Users };
