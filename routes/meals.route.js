const express = require("express");
const app = require("../app");
const country = require("../models/countryModel");
const router = express.Router();
const Meals = require("../models/meals.model");

router.get("/get-meals", async (req, res, next) => {
  try {
    const meals_list = await Meals.find();
    res.status(201).json({
      status: "success",
      meals_list,
    });
  } catch (error) {}
});

router.post("/update-meals", async (req, res, next) => {
  try {
    try {
      const doc = await Meals.create(req.body);
      res.status(201).json({
        status: "success",
        doc,
      });
    } catch (err) {
      console.log(err);
    }
  } catch (error) {}
});
router.post("/delete-meals", async (req, res, next) => {
  try {
    try {
      const doc = await Meals.findByIdAndDelete(req.body);
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
