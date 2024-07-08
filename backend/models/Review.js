const mongoose = require('mongoose');
const ReviewModel = mongoose.model('Review',{
    id:{
        type: Number,
        required: true
    },

    mediaId:{
        type: Number,
        required: true,
    },

    userName:{
        type: String, 
        required: true
    },

    userEmail:{
        type:String,
        required: true 
    },

    reviewText:{
        type:String,
        required: true
    },

    date:{
        type:String,
        required: true
    }

})

module.exports = ReviewModel;