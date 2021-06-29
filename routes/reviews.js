var express = require("express");
var router = express.Router();
var reviewController = require("../controllers/reviewController");

router.get("/", reviewController.get_reviews)
router.post("/add", reviewController.create_review)
// when you post to "/", creates the review
// use axios with this knowledge?
module.exports = router;