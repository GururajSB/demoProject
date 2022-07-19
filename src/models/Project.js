const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mySchema = new Schema(
  {
    name: String,
    tasks: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Task",
        index: true,
      },
    ],
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      index: true,
    },
  },
  { timestamps: true, collation: { locale: "en", strength: 2 } }
);
const project = mongoose.model("Project", mySchema);
module.exports = project;
