const User = require("../../models/User");
const AuthenticationClient = require("../../models/AuthenticationClient");
const Token = require("../../models/Token");
const bcrypt = require("bcrypt");
const { AuthenticationError } = require("apollo-server");
const JWT = require("../../lib/jwt");
const generateToken = require("../../lib/generateToken");

module.exports = async function login(parent, { username, password }) {
  let client_id = process.env.clientID;
  let client = await AuthenticationClient.findById(client_id);

  let user = await User.findOne({
    username: username.toLowerCase(),
  });

  if (!user || !(await bcrypt.compare(password, user.password)))
    throw new AuthenticationError("Invalid username/password");
  return await generateToken(user, client);
};
