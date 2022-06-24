const cloudinary = require("cloudinary").v2;

const express = require("express");
const app = express.Router();

// cloudinary configuration
cloudinary.config({
  cloud_name: "holiday-island",
  api_key: "648795822462679",
  api_secret: "P8cKGuOyiKM4tx06DnYzy2aSkY8",
});

app.get("/", (request, response) => {
  response.json({ message: "Hey! This is your server response!" });
});

// image upload API
app.post("/", async (request, response) => {
  console.log(request.files);
  // collected image from a user
  const data = {
    image: request.files.image,
  };
  const imageUpload = await uploadToCloudinary(
    request.files.image.tempFilePath
  );
  console.log(imageUpload);
  // upload image here
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
module.exports = app;
