// likeModel.js

const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post', // Assuming you have a Post model
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Assuming you have a User model
        required: true
    },
    ActiveLike:{
        type:Boolean,
    },//Whether the like is deleted or the user who liked exists or not.
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Like', likeSchema);

