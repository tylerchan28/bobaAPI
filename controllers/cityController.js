var City = require("../models/city")
exports.san_gabriel_get = async (req, res, next) => {
    try {
        const restaurants = await City.find({ name: "San Gabriel"})
            .then(restaurants => res.json(restaurants))
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

exports.san_francisco_get = async (req, res, next) => {
    try {
        const restaurants = await City.find({ name: "San Francisco"})
            .then(restaurants => res.json(restaurants))
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

exports.manhattan_get = async (req, res, next) => {
    try {
        const restaurants = await City.find({ name: "Manhattan" })
            .then(restaurants => res.json(restaurants))
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

exports.city_get = async (req, res, next) => {
    try {
        const city = await City.find({ "restaurants": { $elemMatch: { id: "sSiUcnbwPQ4ssHY3EMV0Fw" }}})
            .then(city => res.json(city)) 
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}