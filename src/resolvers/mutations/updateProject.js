const Mongo = require("mongodb");
const Project = require("../../models/Project");
module.exports = async (parent, { id, name }) => {
  return await Project.findByIdAndUpdate(id, {name:name}, {new:true});
};
