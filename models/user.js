var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    firstName: { type: String, maxLength: 100, required: true },
    lastName: { type: String, maxLength: 100, required: true },
    username: { type: String, maxLength: 100, required: true, unique: true },
    password: { type: String, maxLength: 100, required: true }
})

module.exports = mongoose.model("User", UserSchema);