const mongoose = require('mongoose');

const ReviewSchema = mongoose.Schema({
    username: {
        type: String
    },
    content: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    replies: [{
        type: Schema.Types.ObjectId,
        ref: 'Review'
    }],
})

module.exports = mongoose.model('Review', ReviewSchema);