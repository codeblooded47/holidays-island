const mongoose = require("mongoose");

const countrySchema = new mongoose.Schema({
  name: String,
});
const country = mongoose.model("Country", countrySchema);

module.exports = country;
