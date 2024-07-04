const mongoose = require("mongoose");
const bcyrpt = require("bcrypt");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      requried: true,
    },
    email: {
      type: String,
      requried: true,
    },
    password: {
      type: String,
      requried: true,
    },
  },
  {
    timestamp: true,
  }
);

userSchema.statics.signup = async function (username, email, password) {
  if (!username || !password || !email) {
    throw new Error("All fields are importent.");
  }

  const salt = await bcyrpt.genSalt(10);
  const hashedPassword = await bcyrpt.hash(password, salt);

  const isUserIn = await this.findOne({ email });

  if (isUserIn) {
    throw new Error("User already registed");
  }

  const user = await this.create({ username, password: hashedPassword, email });
  return user;
};

userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });

  if (!user) {
    throw Error("User not found");
  }

  const isAuth = await bcyrpt.compare(password, user.password);

  if (!isAuth) {
    throw Error("Provide apporitate password");
  }

  return user;
};

module.exports = mongoose.model("User", userSchema);
