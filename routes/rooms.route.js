const express = require("express");
const app = require("../app");
const country = require("../models/countryModel");
const router = express.Router();
const Room = require("../models/rooms.models");

router.get("/get-rooms", async (req, res, next) => {
  try {
    const rooms_list = await Room.find();
    res.status(201).json({
      status: "success",
      rooms_list,
    });
  } catch (error) {}
});

router.post("/update-rooms", async (req, res, next) => {
  try {
    try {
      const doc = await Room.create(req.body);
      res.status(201).json({
        status: "success",
        doc,
      });
    } catch (err) {
      console.log(err);
    }
  } catch (error) {}
});
router.post("/delete-rooms", async (req, res, next) => {
  try {
    try {
      const doc = await Room.findByIdAndDelete(req.body);
      res.status(201).json({
        status: "success",
        doc,
      });
    } catch (err) {
      res.send(err);
      console.log(err);
    }
  } catch (error) {}
});
module.exports = router;
