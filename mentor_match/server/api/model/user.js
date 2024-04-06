//userModel.js 

const mongoose = require('mongoose');

const apiSchema = new mongoose.Schema({
    email:String,
    username:String,
    password:String,
    phonenumber:String,
    address:String,
    filename: {
        type: String,
    },
    admin:{
        type:Boolean,
    },
    followerId:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    followingId:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    
});

  
module.exports = mongoose.model('user',apiSchema);

