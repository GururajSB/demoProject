const Task = require("../../models/Task");
module.exports = async (parent, { id, inputTask }) => {
  return await Task.findByIdAndUpdate(id, inputTask, { new: true });
};
