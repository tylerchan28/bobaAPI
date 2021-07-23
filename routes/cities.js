var express = require('express');
var router = express.Router();
var citiesController = require("../controllers/cityController");

router.get("/san-gabriel", citiesController.san_gabriel_get);
router.get("/san-francisco", citiesController.san_francisco_get);
router.get("/manhattan", citiesController.manhattan_get);

module.exports = router;