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
    date:{
        type: Date,
        default: Date.now
    }
})


module.exports = UserModel;