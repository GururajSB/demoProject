const Task = require("../../models/Task");
module.exports = async (parent, { id, taskInput }) => {
  return await Task.findByIdAndUpdate(id, taskInput, {new:true});
};
