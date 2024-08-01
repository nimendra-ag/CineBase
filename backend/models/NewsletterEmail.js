const mongoose = require('mongoose');
const NewsletterEmailModel = mongoose.model('NewsletterEmail',{
    email:{
        type: String,
        required: true
    }
})

module.exports = NewsletterEmailModel;