const express = require("express")
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken")
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { error } = require("console");

app.use(express.json());
app.use(cors());

const UserModel = require("./models/User");

mongoose.connect("mongodb://127.0.0.1:27017/CineBase");


//API Creation    
app.get("/", (req, res) => {
    res.send("Hello World");
})

app.get("/name", (req, res)=>{
    res.send("Hello from the name");
})


//End point fot registering the user
app.post('/signup', async(req, res)=>{
    let check = await UserModel.findOne({email:req.body.email})
    if(check){
        return res.status(400).json({success:false, error:"existing user found with the same email address."})
    }

    const user = new UserModel({
        name: req.body.username,
        email: req.body.email,
        password: req.body.password,
    });

    await user.save();

    const data = {
        user:{
            id: user.id
        }
    }

    const token = jwt.sign(data, 'secret_cinebase_user');
    res.json({success:true, token:token})
})


// API for signin
app.post('/signin', async(req, res)=>{
    let user = await UserModel.findOne({email: req.body.email});
    console.log(user)
    if(user){
        console.log("it came here")
        const passCompare = req.body.password == user.password;
        console.log(passCompare)
        if(passCompare){
            console.log("it came passcomapre")
            const data = {
                user:{
                    id:user.id
                }
            }
            console.log(data)
            const token = jwt.sign(data, 'secret_cinebase_user');
            res.json({success:true, token:token});
            console.log("token assigned: ", token);
            
        }
        else{
            res.json({success:false, error:"Invalid Password"});
        }
    }
    else{
        res.json(({success:false, error:"Invalid Email"}));
    }
})


app.listen(3002, (error) => {
    if(!error){
        console.log('Server is running on port 3002');
    }
    else{
        console.log(`Error ${error}`);
    }
    
})
