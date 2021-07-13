var express = require("express");
var router = express.Router();
var reviewController = require("../controllers/reviewController");
var passport = require("passport")

router.get("/", reviewController.get_reviews)
// router.post("/add", reviewController.create_review);
router.post("/add", passport.authenticate("jwt", { session: false }), reviewController.create_review)
router.get("/test", passport.authenticate("jwt", { session: false }), (req, res) => {
    res.send({ msg: "Success" })
})

module.exports = router;