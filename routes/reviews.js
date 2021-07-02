var express = require("express");
var router = express.Router();
var reviewController = require("../controllers/reviewController");

router.get("/", reviewController.get_reviews)
router.post("/add", reviewController.create_review)

module.exports = router;