const Mongo = require("mongodb");
const Project = require("../../models/Project");
const { AuthenticationError } = require("apollo-server");
module.exports = async (parent, projectInput, context) => {
  if (!context.user) throw new AuthenticationError("Invalid token");
  if (context) projectInput["createdBy"] = context.user;
  return await Project.create(projectInput);
};
