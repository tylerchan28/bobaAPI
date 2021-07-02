var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    firstName: { type: String, maxLength: 50, required: true },
    lastName: { type: String, maxLength: 50, required: true },
    email: { type: String, maxLength: 50, required: true, unique: true },
    password: { type: String, maxLength: 50, required: true }
})

module.exports = mongoose.model("User", UserSchema);