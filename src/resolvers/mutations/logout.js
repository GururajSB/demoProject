const Token = require("../../models/Token");
module.exports = async (parent, { token }, context) => {
  return !!(await Token.findOneAndDelete({token:token}));
};
