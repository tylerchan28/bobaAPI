var express = require('express');
var router = express.Router();
var userController = require("../controllers/userController")
/* POST user signup. */
router.post("/signup", userController.user_signup_post);
router.post("/login", userController.user_login_post);
router.get("/logout", userController.user_logout_get);
router.post("/verify", userController.user_verify);
router.get("/change-verification/:id", userController.user_change_verification);

module.exports = router;
