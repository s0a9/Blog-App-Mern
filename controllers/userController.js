const User = require("../models/userModel");

// login
// method: post
const login = (req, res) => {
  res.json({ mssg: "Login User" });
};

// signup
// method: post
const signup = (req, res) => {
  res.json({ mssg: "Signup User" });
};

module.exports = {
  login,
  signup,
};
