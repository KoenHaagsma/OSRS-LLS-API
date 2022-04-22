const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    id: {
        required: true,
        type: String,
    },
    desc: {
        required: true,
        type: String,
    },
    img: {
        data: Buffer,
        type: String,
    },
});

module.exports = mongoose.model('Image', imageSchema);
