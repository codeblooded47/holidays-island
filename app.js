const path = require("path");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const authUser = require("./routes/auth.routes");
const fileUpload = require("express-fileupload");
const offerRoute = require("./routes/offerRoute");
const mealsRoute = require("./routes/meals.route");
const hotelsRoute = require("./routes/hotels.route");
const roomsRoute = require("./routes/rooms.route");
const inclusionsRoute = require("./routes/inclusions.route");
const cloud = require("./routes/cloudinary");
const downloadPdf = require("./routes/downloadPdf");
const app = express();
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);
// Implement CORS
app.use(cors());
// app.options("*", cors());

// Serving Static Files
app.use(express.static("public")); //for server

app.use("/static", express.static(path.join(__dirname, "public")));
app.use(express.json());
// Development logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Test middeleware
app.use((req, res, next) => {
  req.requestTime = new Date().toLocaleDateString();
  next();
});

app.use("/", authUser);
app.use("/offers", offerRoute);
app.use("/meals", mealsRoute);
app.use("/hotels", hotelsRoute);
app.use("/rooms", roomsRoute);
app.use("/inclusions", inclusionsRoute);
app.use("/cloudinary", cloud);
app.use("/download", downloadPdf);
module.exports = app;
