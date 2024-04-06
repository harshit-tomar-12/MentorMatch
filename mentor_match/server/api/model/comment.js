// commentModel.js

const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post', // Assuming you have a Post model
        required: true
    },//ID of the post where the comment was made.
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Assuming you have a User model
        required: true
    },
    commentId:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },//Each comment has a unique ID
    text: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    userComments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' 
    }]
});

module.exports = mongoose.model('Comment', commentSchema);
