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
    
    images:{
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

    released_year:{
        type: String,
        required: true,
    },
    
    rating:{ 
        type: Number,
        required: true
    },

    genre:{
        type: Object,
        required: true
    },

    staring:{
        type: Object,
        required: true
    },

    description:{
        type: String,
        required: true
    },

    reviews:{
        type: Object,
        required: false
    }

})


module.exports = MovieModel;