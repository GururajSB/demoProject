const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mySchema = new Schema(
  {
    name: String,
    clientSecret: String,
  },
  { timestamps: true, collation: { locale: "en", strength: 2 } }
);
const authenticationClient = mongoose.model("AuthenticationClient", mySchema);
module.exports = authenticationClient;
