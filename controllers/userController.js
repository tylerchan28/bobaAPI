var User = require("../models/user");
const bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");
const passport = require("passport");

exports.user_signup_post = [
    body("firstName").trim().isLength({ min: 1 }).escape().withMessage("First name must be specified")
      .isAlphanumeric().withMessage("First name has non-alphanumeric characters"),
    body("lastName").trim().isLength({ min: 1 }).escape().withMessage("Last name must be specified")
      .isAlphanumeric().withMessage("Last name has non-alphanumeric characters"),
    body("email").trim().isLength({ min: 1 }).escape().withMessage("Email must be specified as it is used as your login name"),
    body("password").trim().isLength({ min: 1 }).escape().withMessage("Password must be specified"),,
    (req, res, next) => {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: result.array() })
      } else {
        bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
          const user = new User({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: hashedPassword,
          }).save()
            .then(() => res.json("Sign up successful"))
            .catch(err => res.status(500).json("Error: " + err)) 
        })
      }
    }
  ]

  exports.user_login_post = passport.authenticate("local", {
    
  })

  exports.user_logout_get = function (req, res) {
      req.logout();
      
  }