const express = require("express");
const app = require("../app");
const { v4: uuidv4 } = require("uuid");
const router = express.Router();
const Hotel = require("../models/hotels.models");
const cloudinary = require("cloudinary").v2;

router.get("/get-hotels", async (req, res, next) => {
  try {
    const hotels_list = await Hotel.find();
    res.status(201).json({
      status: "success",
      hotels_list,
    });
  } catch (error) {}
});

router.post("/update-hotels", async (req, res, next) => {
  console.log(req);
  let sampleFile;
  let uploadPath;

  if (!req.files || Object.keys(req.files).length === 0) {
    return res
      .status(400)
      .send({ status: false, message: "No files were uploaded." });
  }

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  // sampleFile = req.files.sampleFile;
  // let file_extension = sampleFile.mimetype.split("/")[1];
  // let fileName = uuidv4() + "." + file_extension;
  // uploadPath = __dirname + "/../public/images/" + fileName;

  const imageUpload = await uploadToCloudinary(
    req.files.sampleFile.tempFilePath
  );
  if (imageUpload) {
    try {
      const doc = await Hotel.create({
        image_url: imageUpload.url,
        ...req.body,
      });
      res.status(201).json({
        status: "success",
        doc,
      });
    } catch (err) {
      console.log(err);
    }
  }
  // Use the mv() method to place the file somewhere on your server
  // sampleFile.mv(uploadPath, async (err) => {
  //   if (err) return res.status(500).send(err);

  //   try {
  //     const doc = await Hotel.create({ image_url: fileName, ...req.body });
  //     res.status(201).json({
  //       status: "success",
  //       doc,
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }

  //   // res.send("File uploaded!");
  // });
});
router.post("/delete-hotels", async (req, res, next) => {
  try {
    try {
      const doc = await Hotel.findByIdAndDelete(req.body);
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

function uploadToCloudinary(filepath) {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(filepath, function (error, result) {
      if (error) {
        reject(error);
      }
      resolve(result);
    });
  });
}
module.exports = router;
