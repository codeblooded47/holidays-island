const mongoose = require("mongoose");

const inclusionSchema = new mongoose.Schema({
  name: String,
});
const inclusions = mongoose.model("inclusions", inclusionSchema);

module.exports = inclusions;
