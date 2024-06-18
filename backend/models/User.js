const mongoose = require("mongoose");
const UserModel = mongoose.model('Users',{
    name:{
        type:String,
        required:true
    },
    email:{
        type: String,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    birthday:{
        type: Date,
        default: Date.now
    },
    gender:{
        type: String,
        required: false,
        default: ""
    },
    profilePicture:{
        type: String,
        required: false,
        default: ""
    },
    country:{
        type: String,
        required: false,
        default: ""
    },
    watchlistData:{
        type:Object
    }
})


module.exports = UserModel;