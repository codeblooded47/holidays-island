// var pdfcrowd = require("pdfcrowd");

// // create the API client instance
// var client = new pdfcrowd.HtmlToPdfClient(
//   "yaseer2000",
//   "2efb9ea13c16e297937d2ff34d2faf06"
// );

// // configure the conversion
// try {
//   client.setPageSize("A4");
//   client.setNoMargins(true);
// } catch (why) {
//   // report the error
//   console.error("Pdfcrowd Error: " + why);
//   process.exit(1);
// }

// // run the conversion and write the result to a file
// client.convertUrlToFile(
//   "https://3672272a0ad6.ngrok.io/#/offers/609c67364bf635001562bdc5",
//   "result.pdf",
//   function (err, fileName) {
//     if (err) return console.error("Pdfcrowd Error: " + err);
//     console.log("Success: the file was created " + fileName);
//   }
// );
const express = require("express");
const app = express();
const pdfcrowd = require("pdfcrowd");

// the recommended method is POST
app.get("/", (req, res) => {
  // create the API client instance
  var client = new pdfcrowd.HtmlToPdfClient(
    "demo",
    "ce544b6ea52a5621fb9d55f8b542d14d"
  );
  // configure the conversion
  try {
    client.setPageSize("A4");
    client.setNoMargins(true);
  } catch (why) {
    // report the error
    console.error("Pdfcrowd Error: " + why);
    process.exit(1);
  }

  // configure the callback to send a file in the HTTP response
  var callbacks = pdfcrowd.sendPdfInHttpResponse(
    res,
    "someting2",
    "attachment"
  );

  // callbacks.data = function (data) {
  //   // res.set("Content-Type", "text/plain");
  //   res.status(200);
  //   res.send(data);
  // };
  // configure the callback to send an error in the HTTP response
  callbacks.error = function (errMessage, statusCode) {
    res.set("Content-Type", "text/plain");
    res.status(statusCode || 400);
    res.send(errMessage);
  };

  // run the conversion
  client.convertUrl(
    "https://4db57e202add.ngrok.io/#/offers/609c67364bf635001562bdc5",
    callbacks
  );
});
let port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
