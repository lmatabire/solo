import mongoose = require('mongoose');
import crypto = require('crypto');
import jwt = require("jsonwebtoken");

let UserSchema = new mongoose.Schema({
  username: { type: String, unique: true},
  email: { type: String, unique: true, lowercase: true },
  firstName: String,
  lastName: String,
  address: String,
  zipCode: Number,
  state: String,
  country: String,
  phone:String,
  occupation:String,
  title: String,
  role: String,
  pastIllnesses: String,
  passwordHash: String,
  salt: String,
  sex: String,
  birthday: Date
});

UserSchema.method('setPassword', function(password) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.passwordHash = crypto.pbkdf2Sync(password, this.salt, 1000, 64,'sha1').toString('hex');
});

UserSchema.method('validatePassword', function(password) {
  let hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64,'sha1').toString('hex');
  return (hash === this.passwordHash);
});

UserSchema.method('generateJWT', function() {
  return jwt.sign({
    id: this._id,
    username: this.username,
    email: this.email
  }, 'SecretKey');
});

export default mongoose.model("User", UserSchema);
