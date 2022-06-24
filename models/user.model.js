const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    is_root: Boolean,
    hardcoded_password: String,
  })
);

module.exports = User;
