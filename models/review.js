var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const { DateTime } = require("luxon");

var ReviewSchema = new Schema({
    review: { type: String, required: true, maxLength: 1000 },
    reviewId: { type: String, required: true, maxLength: 100, unique: true},
    userId: { type: String, required: true, maxLength: 100 },
    foodRating: { type: String, maxLength: 3 },
    drinkRating: { type: String, maxLength: 3 },
    hangoutRating: { type: String, maxLength: 3 },
    studyRating: { type: String, maxLength: 3 },
    user: { type: String, required: true, maxLength: 100 },
    restaurantId: { type: String, required: true },
    date: { type: Date, default: DateTime.fromJSDate(Date.now()).toLocaleString(DateTime.DATE_MED) },
})  


module.exports = mongoose.model("Review", ReviewSchema)
