var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var VerificationSchema = new Schema({
    email: { type: String, required: true, match: /.+\@.+\..+/, unique: true },
    code: { type: String, maxLength: 5, required: true }
})


module.exports = mongoose.model("Verification", VerificationSchema);