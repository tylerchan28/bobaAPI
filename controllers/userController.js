var User = require("../models/user");
const bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");
const passport = require("passport");
const jwt = require("jsonwebtoken");
var secret = process.env.SECRET;

exports.user_signup_post = [
    body("firstName").trim().isLength({ min: 1 }).escape().withMessage("First name must be specified")
      .isAlphanumeric().withMessage("First name has non-alphanumeric characters"),
    body("lastName").trim().isLength({ min: 1 }).escape().withMessage("Last name must be specified")
      .isAlphanumeric().withMessage("Last name has non-alphanumeric characters"),
    body("username").trim().isLength({ min: 1 }).escape().withMessage("Username be specified as it is used as your login")
      .isAlphanumeric().withMessage("Username has non-alphanumeric characters")
      .custom(async (username) => {
        try {
          const existingUsername = await User.findOne({ username: username })
          if (existingUsername) {
            throw new Error ("Username is already taken")
          }
        }
        catch (err) {
            throw new Error(err)
        }
      }),
    body("password").trim().isLength({ min: 1 }).escape().withMessage("Password must be specified"),
    (req, res, next) => {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors })
      } else {
        bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
          const user = new User({
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            username: req.body.username,
            password: hashedPassword,
            userId: req.body.userId
          }).save()
            .then(() => res.json("Sign up successful!"))
            .catch(err => res.status(500).json("Error: " + err)) 
        })
      }
    }
  ]

  
  exports.user_logout_get = function (req, res) {
      req.logout();
  }
  

  exports.user_login_post = (req, res, next) => {
    passport.authenticate("local", { session: false }, (err, user, info) => {
      if (err || !user) {
        return res.status(400).json("Incorrect username or password.")
      }
      req.login(user, { session: false }, (err) => {
        if (err) {
          res.send(err)
        }
        jwt.sign({ _id: user._id, username: user.username }, secret, { expiresIn: "1d" }, (err, token) => {
          if (err) return res.status(400).json(err)
          res.json({ message: "auth passed", token: "Bearer " + token, user: { userId: user.userId, username: user.username }})
        })
      })
    })(req, res)
  }
