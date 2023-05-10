const mongoose = require('mongoose');

const ShoeSchema = mongoose.Schema({
    description: {
        type: String
    },
    color: {
        type: String,
        enum: ['Black/Black/Light', 'Armoury Navy/White/Mineral Slate/Mineral Slate']
    },
    origin: {
        type: String
    },
    size: {
        type: String,
        enum: ['6', '6.5', '7', '8', '8.5', '9']
    },
    status: {
        type: String
    }
})

module.exports = mongoose.model('Shoe', ShoeSchema);