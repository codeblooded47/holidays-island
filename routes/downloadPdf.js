const express = require("express");
const country = require("../models/countryModel");
const hotels = require("../models/hotels.models");
const router = express.Router();
const Package = require("../models/offersModel");
const pdfcrowd = require("pdfcrowd");
const port = 80;
const path = require("path");
var html_to_pdf = require("html-pdf-node");
fs = require("fs");
router.get("/get/:id", (req, res) => {
  console.log(req.query);
  // let options = { format: "A4" };
  // Example of options with args
  let options = {
    format: "A4",
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
    ],
    pageRanges: `1-${req.query.page_count}`,
  };

  let file = {
    url: `http://localhost:${port}/#/pdf/${req.params.id}`,
  };
  html_to_pdf.generatePdf(file, options).then((pdfBuffer) => {
    // console.log("PDF Buffer:-", pdfBuffer);
    // fs.writeFile(`${req.params.id}.pdf`, pdfBuffer, function (err) {

    // console.log(req.params.id);

    var img = Buffer.from(pdfBuffer, "base64");
    let disposition = `attachment`;
    if (req.query.open === "true") {
      disposition = "inline";
    }

    res.writeHead(200, {
      "Content-Type": "application/pdf",
      "Content-Length": img.length,
      "Content-Disposition": `${disposition}; filename="${encodeURI(
        req.query.filename
      )}"`,
    });

    return res.end(img);
    // });
  });
});

module.exports = router;
