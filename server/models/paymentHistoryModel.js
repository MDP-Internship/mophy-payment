const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const paymentHistory = new Schema({
  id: Number,
  date: String,
  recipent: {
    name: String,
  },
  email: String,
  serviceType: String,
  status: String,
});

module.exports = mongoose.model("payment_histories", paymentHistory);
