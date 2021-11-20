const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const menuSchema = new Schema ({
    name: String,
    period: Number,
    meals: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Meals'
        }
    ]
});

module.exports = mongoose.model("Menu", menuSchema);

