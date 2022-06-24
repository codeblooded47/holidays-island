const express = require("express");
const country = require("../models/countryModel");
const hotels = require("../models/hotels.models");
const router = express.Router();
const Package = require("../models/offersModel");

router.get("/get-countries", async (req, res, next) => {
  try {
    const country_list = await country.find();
    res.status(201).json({
      status: "success",
      country_list,
    });
  } catch (error) {}
});

router.post("/update-country", async (req, res, next) => {
  try {
    try {
      const doc = await country.create(req.body);
      res.status(201).json({
        status: "success",
        doc,
      });
    } catch (err) {
      console.log(err);
    }
  } catch (error) {}
});
router.post("/delete-country", async (req, res, next) => {
  try {
    try {
      const doc = await country.findByIdAndDelete(req.body);
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
router.post(
  "/",

  async (req, res, next) => {
    try {
      const doc = await Package.create(req.body);
      res.status(201).json({
        status: "success",
        doc,
      });
    } catch (err) {
      console.log(err);
    }
  }
);

router.get("/", async (req, res) => {
  try {
    const doc = await Package.find();

    console.log(doc.reverse());
    res.status(201).json(doc);
  } catch (err) {
    res.json(err);
  }
});
router.get("/get-offer/:id", async (req, res) => {
  try {
    const doc_by_id = await Package.findById(req.params.id);

    for (var i = 0; i < doc_by_id.Offers.length; i++) {
      for (var j = 0; j < doc_by_id.Offers[i].Hotels.length; j++) {
        try {
          let hotelImage = await hotels.findOne({
            name: doc_by_id.Offers[i].Hotels[j].HotelName,
          });
          doc_by_id.Offers[i].Hotels[j].image_url = hotelImage.image_url;
        } catch (error) {
          console.log(error);
        }
      }
    }
    res.status(201).json(doc_by_id);
  } catch (error) {
    res.json(error);
  }
});

router.post("/update-offer/:id", async (req, res) => {
  try {
    const updateOffer = await Package.findByIdAndUpdate(
      req.params.id,
      req.body
    );

    res
      .status(201)
      .json({ status: true, message: "update package", doc: updateOffer });
  } catch (error) {
    console.log(error);
  }
});

router.delete("/delete-offer/:id", async (req, res) => {
  console.log(req.params.id);
  try {
    const doc_by_id = await Package.findByIdAndDelete(req.params.id);
    res.status(201).json({
      status: "success",
      data: doc_by_id,
    });
  } catch (error) {
    res.json(error);
  }
});
router.delete("/", async (req, res) => {
  try {
    await Package.deleteMany({});

    res.status(201).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
