const mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
});

const Restaurant = mongoose.model("Restaurant", RestaurantSchema);

module.exports = Restaurant;