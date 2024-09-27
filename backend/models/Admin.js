const mongoose = require("mongoose");
const AdminModel = mongoose.model('Admins',{
    email:{
        type: String,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
})


module.exports = AdminModel;