const Task = require("../../models/Task");
const { AuthenticationError } = require("apollo-server");
module.exports = async (parent, taskInput, context) => {
  if (!context.user) throw new AuthenticationError("Invalid token");
  if (context) taskInput["createdBy"] = context.user;
  return await Task.create(taskInput);
};
