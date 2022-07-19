const Task = require("../../models/Task");
module.exports = async (parent, { id }) => {
  return await Task.findById(id);
};
