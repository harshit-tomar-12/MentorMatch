// activityModel.js

const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post', // Assuming you have a Post model
        required: true
    },//ID of the post where the comment was made.
    NumOfLikeslikes_count: Number,//It stores the number of likes on a post or comment.
});

module.exports = mongoose.model('Comment', activitySchema);
