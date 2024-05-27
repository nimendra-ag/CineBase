const express = require("express")
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken")
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());


mongoose.connect("mongodb://127.0.0.1:27017/CineBase");


//API Creation    
app.get("/", (req, res) => {
    res.send("Hello World");
})

app.listen(3002, (error) => {
    if(!error){
        console.log('Server is running on port 3002');
    }
    else{
        console.log(`Error ${error}`);
    }
    
})
