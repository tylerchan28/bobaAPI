var Review = require("../models/review");

exports.get_reviews = async (req, res, next) => {
    try {
        const reviews = await Review.find({}).sort({ date: -1 })
            .then(reviews => res.json(reviews))
    } catch (err) {
        res.status(404).json({ message: error.message })
    }
}

exports.create_review = function(req, res) {
    const review = new Review({
        review: req.body.review,
        restaurantId: req.body.restaurantId,
        foodRating: req.body.foodRating,
        drinkRating: req.body.drinkRating,
        hangoutRating: req.body.hangoutRating,
        date: Date.now()
    }).save()
    .then(() => res.json("Review added!"))
    .catch(err => res.json("Error: " + err));
}

// add userId: req.body.userId, when user login implemented