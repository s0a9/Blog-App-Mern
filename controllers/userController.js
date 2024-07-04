const User = require("../models/userModel");

// login
// method: post
const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ mssg: "All field's are mandatory" });
  }

  try {
    const user = await User.login(email, password);
    res.status(200).json({ user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// signup
// method: post
const signup = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = await User.signup(username, email, password);
    res.status(200).json({ mssg: "Signup User", user });
    if (!user) {
      throw new Error({ message: "can't create user" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  login,
  signup,
};
