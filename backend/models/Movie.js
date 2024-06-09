const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    author: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const MovieModel = mongoose.model('Movies',{
    id:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    
    caroImage:{
        type: String,
        required: true
    },

    cardImage:{
        type: String,
        required: true
    },

    displayImage:{
        type: String,
        required: true
    },

    trailor:{
        type: String,
        required: true
    },

    director:{
        type:String,
        required:true
    },

    releasedYear:{
        type: String,
        required: true,
    },
    
    rating:{ 
        type: String,
        required: true
    },

    genre1:{
        type: String,
        required: true
    },

    genre2:{
        type: String,
        required: true
    },

    leadActor:{
        type: String,
        required: true
    },

    supportActor:{
        type: String,
        required: true
    },

    description:{
        type: String,
        required: true
    },

    reviews: {
        type: [reviewSchema], // Array of review objects
        required: false,
        default: [] // Initialize with an empty array
    }

})


module.exports = MovieModel;