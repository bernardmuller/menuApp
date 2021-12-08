const mongoose = require('mongoose');
const schema = mongoose.Schema;

const cuisineSchema = new Schema ({
    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Cuisine', cuisineSchema);