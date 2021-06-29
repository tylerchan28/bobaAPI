var express = require("express");
var router = express.Router();
var reviewController = require("../controllers/reviewController");

router.get("/", (req, res) => {
  res.send("hello")
})
module.exports = router;
