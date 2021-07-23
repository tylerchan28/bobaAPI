var Review = require("../models/review");

exports.get_reviews = async (req, res, next) => {
    try {
        const reviews = await Review.find({}).sort({ date: -1 })
            .then(reviews => res.json(reviews))
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

exports.create_review = function(req, res) {
    const review = new Review({ // add validation
        review: req.body.review,
        reviewId: req.body.reviewId,
        restaurantId: req.body.restaurantId,
        userId: req.body.userId,
        foodRating: req.body.foodRating || "N/A",
        drinkRating: req.body.drinkRating || "N/A",
        hangoutRating: req.body.hangoutRating || "N/A",
        studyRating: req.body.studyRating || "N/A",
        user: req.body.user,
        date: Date.now()
    }).save()
    .then(() => res.json("Review added!"))
    .catch(err => res.json("Error: " + err));
}

exports.delete_review = function(req, res) {
    Review.findOneAndDelete({ reviewId: req.body.reviewId } ,
    function (err, data) {
        if (err) {
            console.log(err)
        } else {
            res.send(data);
        }
    })
}

exports.update_review = function(req, res) {
    Review.findOneAndUpdate({ reviewId: req.body.reviewId }, 
        { 
            review: req.body.review,
            foodRating: req.body.foodRating || "N/A",
            drinkRating: req.body.drinkRating || "N/A",
            hangoutRating: req.body.hangoutRating || "N/A",
            studyRating: req.body.studyRating || "N/A"
        })
        .exec((err, updatedReview) => {
            if (err) {
                return res.json(err)
            } else {
                res.json(updatedReview)
            }
        })
}

// { 
//     review: req.body.review,
//     foodRating: req.body.foodRating || "N/A",
//     drinkRating: req.body.drinkRating || "N/A",
//     hangoutRating: req.body.hangoutRating || "N/A",
//     studyRating: req.body.studyRating || "N/A"
// }