let User = require("../../models/User");
const bcrypt = require("bcrypt");
const { UserInputError } = require("apollo-server");

module.exports = async (parent, { signinInput }) => {
  let existingUser = await User.findOne({ username: signinInput.username });
    if (existingUser)
      throw new UserInputError("Username already exists", {
        invalidArg: "username",
      });
  let securePassword = async (password) => {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    return bcrypt.hashSync(password, salt);
  };
  signinInput.password = await securePassword(signinInput.password);
  return User.create(signinInput);
};
