var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const { DateTime } = require("luxon");

var ReviewSchema = new Schema({
    review: { type: String, required: true, maxLength: 1000 },
    foodRating: { type: String, maxLength: 3 },
    drinkRating: { type: String, maxLength: 3 },
    hangoutRating: { type: String, maxLength: 3 },
    studyRating: { type: String, maxLength: 3 },
    restaurantId: { type: String, required: true },
    date: { type: Date, default: DateTime.fromJSDate(Date.now()).toLocaleString(DateTime.DATE_MED) },
})

ReviewSchema
    .virtual("date_formatted")
    .get(function() {
        return DateTime.fromJSDate(this.date).toLocaleString(DateTime.DATE_MED);
    })

module.exports = mongoose.model("Review", ReviewSchema)

// add userId: { type: String, required: true } when use login implemented

// or just user: {type: Object, required: true} and populate with reference to current user

// author: { type: Schema.Types.ObjectId, ref: "User" }