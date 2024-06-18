const port = 4000
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
const MovieModel = require("./models/Movie");
mongoose.connect("mongodb://127.0.0.1:27017/CineBase");


// API Creation    
app.get("/", (req, res) => {
    res.send("Hello World");
})

app.get("/name", (req, res)=>{
    res.send("Hello from the name");
})

//Image storage engine

const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb)=>{
        return cb(null, `${file.fieldname}_${Date.now()}_${path.basename(file.originalname)}`)
    }
})

const upload = multer({storage:storage})

//Creating Upload endpoint for images
app.use('/images', express.static('upload/images'))    //path of the folder 

app.post('/upload',upload.single('media'), (req, res)=>{       //to upload any image, we will use this endpoint
    res.json({
        success:1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    })
})


//Creating the endpoint for adding the movie

app.post('/addmovie', async (req, res)=>{
    let movies = await MovieModel.find({});
    let id;
    if(movies.length>0){
        let last_movie_array = movies.slice(-1);
        let last_movie = last_movie_array[0];
        id = last_movie.id + 1;
    }
    else{
        id = 1;
    }
    const movie = new MovieModel({
        id:id,
        name:req.body.name,
        caroImage: req.body.caroImage,
        cardImage: req.body.cardImage,
        displayImage: req.body.displayImage,
        trailor: req.body.trailor,
        director: req.body.director,
        releasedYear: req.body.releasedYear,
        rating: req.body.rating,
        genre1: req.body.genre1,
        genre2: req.body.genre2,
        leadActor: req.body.leadActor,
        supportActor: req.body.supportActor,
        description: req.body.description,
    });

    console.log(movie);
    await movie.save();

    console.log("Movie Saved");
    res.json({
        success: true,
        name:req.body.name,
    })
})

//Creating API for deleting a Movie
app.post('/removemovie', async (req, res)=>{
    await MovieModel.findOneAndDelete({id:req.body.id});
    console.log("Removed");
    res.json({
        success: true,
        name: req.body.name
    })
})


//creating api for getting all movies
app.get('/allmovies', async (req, res)=>{
    let movies = await MovieModel.find({});
    console.log("All Movies Fetched.");

    res.send(movies)
})

//creating api for getting a specified number of media from a specified media type
app.get('/Media', async(req, res) => {
    const mediaType = req.query.mediaType;
    const count = parseInt(req.query.count, 10);
    
   let media = await MovieModel.find({
        category: mediaType
   });
   let selectedMedia = media.sort((a, b) => 0.5 - Math.random()).slice(0, count);
   console.log(selectedMedia);
   res.send(selectedMedia);
  });


//End point fot registering the user
app.post('/signup', async(req, res)=>{
    let check = await UserModel.findOne({email:req.body.email})
    if(check){
        return res.status(400).json({success:false, error:"existing user found with the same email address."})
    }

    let watchlist = {};
    for(let i = 0; i<300; i++){
        watchlist[i] = false;
    }
    const user = new UserModel({
        name: req.body.username,
        email: req.body.email,
        password: req.body.password,
        watchlistData: watchlist
    })

    await user.save();

    const data = {
        user:{
            id: user.id
        }
    }

    const token = jwt.sign(data, 'secret_cinebase_user');
    res.json({success:true, token:token})
})


// creating endpoint for user login
app.post('/login', async (req,res)=>{
    let user = await UserModel.findOne({email:req.body.email});
    if(user){
        const passCompare = req.body.password === user.password;
        if(passCompare){
            const data = {
                user:{
                    id:user.id
                }
            }
            const token = jwt.sign(data, 'secret_cinebase_user');
            res.json({success:true, token: token});
        }
        else{
            res.json({success:false, error:"Wrong Password"});
        }
    }
    else{
        res.json({success:false, error:"Wrong Email ID"});
    }
})


app.listen(port, (error) => {
    if(!error){
        console.log(`Server is running on port ${port}`);
    }
    else{
        console.log(`Error ${error}`);
    }
    
})
