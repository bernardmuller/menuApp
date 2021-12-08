const mongoose = require('mongoose');
const schema = mongoose.Schema;

const categorySchema = new Schema ({
    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Category', categorySchema);