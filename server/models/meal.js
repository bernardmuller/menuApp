const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./User');
const Ingredient = require('./ingredient');
const Cuisine = require('./cuisine');


const mealSchema = new Schema ({
    name: {

        type: String, 
        required: [true, 'Please provide your email'],

    },
    season: {

        type: String,
        required: [true, 'Please provide a season'],

    },
    directions: {

        type: String,
        required: true

    },
    ingredients: [
        {
            type: Schema.Types.ObjectId,
            ref:'Ingredient'
        }
    ],
    cousine: {
        type: Schema.Types.ObjectId,
        ref: 'Cuisine'
    },
    favourite: Boolean,
    image: String,
    url: String,
    prepTime: Number,
    cookTime: Number,
    readyIn: Number,
    rating: {

        type: Number,
        min: 0,
        max: 5,
        default: 0,

    },
    notes: {

        type: String,
        maxlength: 200,
        
    },
    createdBy: {

        type: Schema.Types.ObjectId,
        ref: 'User'

    },
    updatedBy: {

        type: Schema.Types.ObjectId,
        ref: 'User'

    },
    createdAt: {

        type: String,
        required: true

    },
    updatedAt: {

        type: String,
        required: true

    },
    image: String,
    URL: String, 

});

schema.pre('save', function(next) {

    let now = Date.now;
    if (!this.createdAt) this.createdAt = now;
    this.updatedAt = now;

    next();
});

module.exports = mongoose.model("Meal", mealSchema);