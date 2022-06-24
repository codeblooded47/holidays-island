const mongoose = require("mongoose");

const mealsSchema = new mongoose.Schema({
  name: String,
});
const meals = mongoose.model("Meals", mealsSchema);

module.exports = meals;
