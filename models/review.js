var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ReviewSchema = new Schema({
    review: { type: String, required: true, maxLength: 1000 },
    foodRating: { type: String, maxLength: 3 },
    drinkRating: { type: String, maxLength: 3 },
    hangoutRating: { type: String, maxLength: 3 },
    restaurantId: { type: String, required: true },
    date: { type: Date, default: Date.now() }
})

module.exports = mongoose.model("Review", ReviewSchema)

// add userId: { type: String, required: true } when use login implemented