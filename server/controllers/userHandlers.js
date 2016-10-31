const mongoose = require('mongoose');
const models = require('../models/mdb-config');
const Users = models.Users;

exports = module.exports = {};

exports.addUser = (githubProfile, callback) => {
  const user = new Users({
    accessToken: githubProfile.accessToken,
    refreshToken: githubProfile.refreshToken,
    _id: mongoose.Types.ObjectId(),
    gitHandle: githubProfile.username,
    githubId: githubProfile.id,
    name: githubProfile.displayName,
    created: Date.now(),
    avatar_url: githubProfile._json.avatar_url,
  });
  user.save((err, newUser) => {
    if (err) throw err;
    callback(newUser);
  });
};
