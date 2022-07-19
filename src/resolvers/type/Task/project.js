const Project = require("../../../models/Project");
module.exports = async (reference) => {
  if (!reference.project) return null;
  return Project.findById(reference.project);
};
