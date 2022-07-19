const Project = require("../../models/Project");
module.exports = async (parent, { id }) => {
  return await Project.findById(id);
};
