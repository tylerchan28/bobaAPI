var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CitySchema = new Schema({
    id: { type: String, maxLength: 100, required: true },
    image_url: { type: String, maxLength: 100 },
    name: { type: String, maxLength: 100, required: true },
    location: { type: Object },
    display_phone: { type: String, maxLength: 100 },
    restaurants: { type: Array, maxLength: 100 }
})


module.exports = mongoose.model("City", CitySchema);