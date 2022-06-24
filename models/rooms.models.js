const mongoose = require("mongoose");

const roomsSchema = new mongoose.Schema({
  name: String,
});
const rooms = mongoose.model("Rooms", roomsSchema);

module.exports = rooms;
