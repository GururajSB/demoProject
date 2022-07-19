const Project = require("../../models/Project");
module.exports = async (parent, args, context) => {
  console.log(context)
  return await Project.find();
};
