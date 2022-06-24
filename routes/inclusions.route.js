const express = require("express");
const app = require("../app");
const country = require("../models/countryModel");
const router = express.Router();
const Inclusion = require("./../models/inclusions.model");
router.get("/get-inclusions", async (req, res, next) => {
  try {
    const inclusions_list = await Inclusion.find();
    res.status(201).json({
      status: "success",
      inclusions_list,
    });
  } catch (error) {}
});

router.post("/update-inclusions", async (req, res, next) => {
  try {
    try {
      const doc = await Inclusion.create(req.body);
      res.status(201).json({
        status: "success",
        doc,
      });
    } catch (err) {
      console.log(err);
    }
  } catch (error) {}
});
router.post("/delete-inclusions", async (req, res, next) => {
  try {
    try {
      const doc = await Inclusion.findByIdAndDelete(req.body);
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
