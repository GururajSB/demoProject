const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const schema = new Schema(
  {
    token: String,
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "AuthenticationClient",
    },
    payload: {
      type: mongoose.Schema.Types.Mixed,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Token", schema);
