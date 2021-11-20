const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const mealSchema = new Schema ({
    name: {
        type: String, 
        required: true,
    },
    season: {
        type: String,
        required: true,
    },
    instructions: {
        type: String,
        required: true
    },
    image: String,
    URL: String, 
    ingredients: []   
});

module.exports = mongoose.model("Meal", mealSchema);