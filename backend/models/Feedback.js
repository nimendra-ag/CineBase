const mongoose = require("mongoose");
const FeedbackModel = mongoose.model('Feedback',{
    name: {
        type: String,
        required: true
    },
    country:{
        type: String,
        required: true
    },
    feedback:{
        type: String,
        required: true
    }
})

module.exports = FeedbackModel;