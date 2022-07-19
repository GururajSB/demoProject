const Task = require("../../models/Task");
module.exports = async (parent, { project }) => {
  let query = {};
  if (project) query["project"] = project;
  return await Task.find(query);
};
