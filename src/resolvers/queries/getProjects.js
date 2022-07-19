const Project = require("../../models/Project");
module.exports = async (parent, args, context) => {
  return await Project.find();
};
