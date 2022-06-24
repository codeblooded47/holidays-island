const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(__dirname + "/dist/hotels/browser"));

app.get("/*", (req, res, next) => {
  res.sendFile(path.join(__dirname + "/dist/dictionary/index.html"));
});
let port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log("lestening on port " + port);
});
