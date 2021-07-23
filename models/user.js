var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    firstName: { type: String, maxLength: 100, required: true },
    lastName: { type: String, maxLength: 100, required: true },
    email: { type: String, required: true, match: /.+\@.+\..+/, unique: true },
    username: { type: String, maxLength: 100, required: true, unique: true },
    password: { type: String, maxLength: 100, required: true },
    userId: { type: String, maxLength: 100, required: true, unique: true }
})


module.exports = mongoose.model("User", UserSchema);