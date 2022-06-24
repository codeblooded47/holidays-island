const { verifySignUp } = require("../middlewares");
const controller = require("../controller/auth.controller");
const express = require("express");
const bodyParser = require("body-parser");
const app = express.Router();

// parse requests of content-type - application/json
// app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// parse requests of content-type - application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

app.post(
  "/api/auth/signup",
  [verifySignUp.checkDuplicateUsernameOrEmail],
  controller.signup
);

app.post("/api/auth/signin", controller.signin);
app.post("/api/auth/logout", controller.logout);
app.post(
  "/api/auth/createuser",
  [verifySignUp.checkDuplicateUsernameOrEmail],
  controller.createUser
);
app.post("/api/auth/deleteuser", controller.deleteUser);
app.post("/api/auth/listalluser", controller.list_all_user);

module.exports = app;
