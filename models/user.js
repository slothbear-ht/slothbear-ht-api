const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

module.exports = function(connection) {
  var userSchema = new mongoose.Schema({
    htTokenSecret : String
  });

  userSchema.methods.generateToken = function(cb) {
    if (!this.hash) return cb(new Error('could not generate token'));
    cb(null, jwt.sign({ idd: this.hash }, process.env.APP_SECRET));
  };

  return connection.model('User', userSchema);
};
