const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;
const Logout = db.logout;
const jwt_decode = require("jwt-decode");

// const Role = db.role;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    is_root: true,
  });

  user.save((err) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    User.findOne({ name: req.body.username }, (err, role) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      var token = jwt.sign(
        { id: user.id, email: req.body.email, username: req.body.username },
        config.secret,
        {
          expiresIn: 86400, // 24 hours
        }
      );
      res.status(200).send({
        status: true,
        id: user._id,
        username: user.username,
        email: user.email,
        is_root: user.is_root,
        accessToken: token,
      });
    });
  });
};

exports.createUser = (req, res) => {
  let header = req.headers["x-access-token"];
  if (
    req.body.username === null ||
    req.body.email === null ||
    req.body.password === null ||
    req.body.is_root === null
  ) {
    res.status(200).send({
      status: false,
      message: "value can't be null",
    });
    return;
  }
  try {
    var req_data = jwt_decode(header);
    User.findOne({ username: req_data.username }, (err1, role) => {
      if (err1) {
        res.status(200).send({ status: false, message: err1 });
        return;
      }
      if (role.is_root) {
        const user = new User({
          username: req.body.username,
          email: req.body.email,
          password: bcrypt.hashSync(req.body.password, 8),
          hardcoded_password: req.body.password,
          is_root: req.body.is_root,
        });

        user.save((err, role) => {
          if (err) {
            res.status(200).send({ status: false, message: err });
            return;
          }
          res.status(200).send({
            status: true,
            id: role._id,
            username: role.username,
            email: role.email,
            hardcoded_password: req.body.password,
            is_root: role.is_root,
            message: "user is created",
          });
        });
      } else {
        res.status(200).send({
          status: false,
          is_root: false,
          message: "user is not root user",
        });
      }
    });
  } catch (error) {
    res.status(200).send({ status: false, message: error.message });
  }
};

exports.deleteUser = (req, res) => {
  let header = req.headers["x-access-token"];
  try {
    var req_data = jwt_decode(header);
    User.findOne({ username: req_data.username }, async (err1, role) => {
      if (err1) {
        res.status(200).send({ status: false, message: err1 });
        return;
      }
      if (role.is_root) {
        const deletedUser = await User.findOneAndDelete(
          {
            email: req.body.email,
          },
          (err, resp_data) => {
            if (err) {
              res.status(200).send({ status: false, message: err });
              return;
            }
            res.status(200).send({
              status: true,
              id: role._id,
              username: role.username,
              email: role.email,
              is_root: role.is_root,
              message: "user is deleted",
            });
          }
        );
      } else {
        res.status(200).send({
          status: false,
          is_root: false,
          message: "user is not root user",
        });
      }
    });
  } catch (error) {
    res.status(200).send({ status: false, message: error.message });
  }
};

exports.list_all_user = (req, res) => {
  let header = req.headers["x-access-token"];
  try {
    var req_data = jwt_decode(header);
    User.findOne({ username: req_data.username }, async (err1, role) => {
      if (err1) {
        res.status(500).send({ message: err1 });
        return;
      }
      if (role.is_root) {
        const all_user = await User.find((err, list_user) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }
          res.status(200).send({
            status: true,
            data: list_user,
            message: "all user list",
          });
        });
      } else {
        res.status(200).send({
          status: false,
          is_root: false,
          message: "user is not root user",
        });
      }
    });
  } catch (error) {
    res.status(200).send({ status: false, message: error.message });
  }
};

exports.signin = (req, res) => {
  User.findOne({
    username: req.body.username,
  })
    .populate("roles", "-__v")
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (!user) {
        return res
          .status(200)
          .send({ status: false, message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(200).send({
          accessToken: null,
          message: "Invalid Password!",
          status: false,
        });
      }

      // check root
      let root_usr = false;
      if (user.is_root) {
        root_usr = true;
      }
      var token = jwt.sign(
        {
          id: user.id,
          username: user.username,
          email: user.email,
          is_root: root_usr,
        },
        config.secret,
        {
          expiresIn: 86400, // 24 hours
        }
      );

      var authorities = [];
      res.status(200).send({
        status: true,
        id: user._id,
        is_root: root_usr,
        username: user.username,
        email: user.email,
        accessToken: token,
      });
    });
};

exports.logout = (req, res) => {
  const logout_user = new Logout({
    accessToken: req.body.accessToken,
  });
  logout_user.save((err, doc) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    res.status(200).send({
      status: true,
      masssage: "logout",
      accessToken: null,
    });
  });
};
