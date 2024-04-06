// postModel.js

const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Assuming you have a User model
        required: true
    },
    psotId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    Postname: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Like' // Assuming you have a Like model
    }],
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment' // Assuming you have a Comment model
    }]
});

module.exports = mongoose.model('Post', postSchema);
