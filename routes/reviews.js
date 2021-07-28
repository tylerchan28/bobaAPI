var express = require("express");
var router = express.Router();
var reviewController = require("../controllers/reviewController");
var passport = require("passport")

router.get("/", reviewController.get_reviews)
router.post("/add", passport.authenticate("jwt", { session: false }), reviewController.create_review)
router.delete("/delete", passport.authenticate("jwt", { session: false }), reviewController.delete_review)
router.put("/update", passport.authenticate("jwt", { session: false}), reviewController.update_review)
module.exports = router;