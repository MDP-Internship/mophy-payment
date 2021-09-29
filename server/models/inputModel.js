const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const input = new Schema({
  name: String,
  type: String,
  textType: String,
  value: Array | String,
});

module.exports = mongoose.model("inputs", input);
