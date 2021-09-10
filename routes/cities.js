var express = require('express');
var router = express.Router();
var citiesController = require("../controllers/cityController");

router.get("/:city", citiesController.city_get)
router.get("/city-shops/:id", citiesController.shop_get)

module.exports = router;