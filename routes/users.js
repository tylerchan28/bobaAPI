var express = require('express');
var router = express.Router();
var userController = require("../controllers/userController")

/* POST user signup. */
// router.get("/:id", userController.current_user_get);
router.post("/signup", userController.user_signup_post);
router.post("/login", userController.user_login_post);
router.get("/user", userController.user_login_get);

module.exports = router;
