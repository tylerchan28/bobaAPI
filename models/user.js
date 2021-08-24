var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    email: { type: String, required: true, match: /.+\@.+\..+/, unique: true },
    username: { type: String, maxLength: 100, required: true, unique: true },
    password: { type: String, maxLength: 100, required: true },
    userId: { type: String, maxLength: 100, required: true, unique: true },
    verified: { type: Boolean, default: false, required: true },
    reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }]
})


module.exports = mongoose.model("User", UserSchema);