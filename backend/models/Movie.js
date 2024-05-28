const mongoose = require("mongoose");
const MovieModel = mongoose.model('Movies',{
    id:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    
    image:{
        type: Object,
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

    release_date:{
        type: Date,
        required: true,
    },
    
    rating:{ 
        type: Number,
        default: 0
    },

    genre:{
        type: Object,

    },

    staring:{
        type: Object,

    },

    description:{
        type: String,
        required: true
    },


})


module.exports = MovieModel;