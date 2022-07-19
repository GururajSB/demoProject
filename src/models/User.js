const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mySchema = new Schema(
  {
    name: String,
    phone: String,
    email: String,
    username: String,
    password: String,
  },
  { timestamps: true, collation: { locale: "en", strength: 2 } }
);
const user = mongoose.model("User", mySchema);

module.exports = user;
