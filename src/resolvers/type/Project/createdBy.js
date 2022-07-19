const User = require("../../../models/User");
module.exports = async (reference) => {
    console.log(reference, "  reference")
  if (!reference.createdBy) return null;
  return User.findById(reference.createdBy);
};
