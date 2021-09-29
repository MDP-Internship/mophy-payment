const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const notification = new Schema({
  id: Number,
  title: String,
  description: String,
});

module.exports = mongoose.model("notifications", notification);
