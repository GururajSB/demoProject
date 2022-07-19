const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mySchema = new Schema(
  {
    name: String,
    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      index: true,
    },
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      index: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      index: true,
    },
  },
  { timestamps: true, collation: { locale: "en", strength: 2 } }
);
const task = mongoose.model("Task", mySchema);

module.exports = task;
