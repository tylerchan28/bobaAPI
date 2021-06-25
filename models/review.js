var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ReviewSchema = new Schema({
    review: { type: String, required: true, maxLength: 1000 }
})

module.exports = mongoose.model("Review", ReviewSchema)