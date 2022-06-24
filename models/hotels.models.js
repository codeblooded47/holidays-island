const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
  name: String,
  country: String,
  image_url: String,
});
const hotels = mongoose.model("Hotels", hotelSchema);

module.exports = hotels;
