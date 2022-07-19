const User = require("../../../models/User");
module.exports = async (reference) => {
  if (!reference.assignedTo) return null;
  return User.findById(reference.assignedTo);
};
