var express = require('express');
var router = express.Router();
var userController = require("../controllers/userController")
var passport = require("passport");

/* POST user signup. */
router.post("/signup", userController.user_signup_post);

router.post("/login", userController.user_login_post);
router.get("/logout", passport.authenticate("jwt", { session: false }), userController.user_logout_get);

router.post("/verify", userController.user_verify);
router.get("/change-verification/:id", userController.user_change_verification);

router.post("/send-forgot-email", userController.user_forgot_password);
router.post("/reset-password/:id", userController.user_reset_password);

module.exports = router;
