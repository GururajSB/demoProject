const User = require("../../../models/User");
module.exports = async (reference) => {
  if (!reference.createdBy) return null;
  return User.findById(reference.createdBy);
};
