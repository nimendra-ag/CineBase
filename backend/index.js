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
const ReviewModel = require("./models/Review");
const FeedbackModel = require("./models/Feedback");

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
        category: req.body.category,
    });

    console.log(movie);
    await movie.save();

    console.log("Movie Saved");
    res.json({
        success: true,
        name:req.body.name,
    })
})

//Creating API for getting an specific media for updating
app.get('/media/:MediaId', async (req, res)=>{
    let media = await MovieModel.find({id:req.params.MediaId})
    console.log(media);
    res.json(media)
})

app.put('/updatemedia/:MediaId', async (req, res)=>{
    console.log(req.params.MediaId);
    const updatedData = req.body;
    await MovieModel.findOneAndUpdate({id:req.params.MediaId},
        updatedData,
        { new: true } 
    );
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
   let selectedMedia = media.sort((a, b) => 0.5 - Math.random()).slice(0, count); //shuffling
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

//Creating an endpoint for user feedback
app.post('/addfeedback', async (req, res)=>{
    const feedback = new FeedbackModel({
        name: req.body.name,
        country: req.body.country,
        feedback: req.body.feedback
    })
    await feedback.save();

    res.json({success:true})
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

//creating middleware to fetch user
const fetchUser = async (req, res, next)=>{
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({errors:"Please authenticate using valid token"})
    }
    else{
        try{
            const data = jwt.verify(token, 'secret_cinebase_user');
            req.user = data.user;
            next();
        }
        catch(error){
            res.status(401).send({errors:"Please authenticate using a valid token"})
        }
    }
}

//creating an API for getting a review for a movie
app.post('/newReview', fetchUser, async(req, res) => {
    let user = await UserModel.findOne({_id:req.user.id})
    var today = new Date();
    var DD = String(today.getDate()).padStart(2, '0');
    var MM = today.toLocaleString('default', { month: 'long' });
    var YYYY = today.getFullYear();
    var date = MM.concat(" ", DD, ", ", YYYY);

    let reviews = await ReviewModel.find({});
    let id;
    if(reviews.length>0){
        let last_review_array = reviews.slice(-1);
        let last_review = last_review_array[0];
        id = last_review.id + 1;
    }
    else{
        id = 1;
    }

    const review = new ReviewModel({
        id: id,
        mediaId:req.query.mediaId,
        userName: user.name,
        userEmail: user.email,
        reviewText: req.body.review,
        date: date
    });

    console.log(review);
    await review.save();
    console.log("Review Saved");
    res.json({
        success: true,
        review: req.body.review, 
    })
})

//Creating an endpoint for getting all reviews
app.get('/allreviews', async (req, res)=>{
    let reviews = await ReviewModel.find({});
    console.log("All Reviews Fetched.");
    res.send(reviews);
})



//creating endpoint for adding movies in watchlist
app.post('/addtowatchlist', fetchUser, async (req, res)=>{
    let userData = await UserModel.findOne({_id:req.user.id});
    userData.watchlistData[req.body.mediaId] = true;
    await UserModel.findOneAndUpdate({_id:req.user.id}, {watchlistData:userData.watchlistData});
    res.json({success:true, message:"Added to watchlist"});

})

//creating endpoiunt to remove product
app.post('/removefromwatchlist', fetchUser, async (req, res)=>{
    let userData = await UserModel.findOne({_id:req.user.id});
    userData.watchlistData[req.body.mediaId] = false;
    await UserModel.findOneAndUpdate({_id:req.user.id}, {watchlistData:userData.watchlistData});
    res.json({success:true, message:"Removed to watchlist"});

})

//creating endpoint to get watchlist data
app.post('/getwatchlist', fetchUser, async (req, res)=>{
    let userData = await UserModel.findOne({_id:req.user.id});
    res.json(userData.watchlistData);
})
app.listen(port, (error) => {
    if(!error){
        console.log(`Server is running on port ${port}`);
    }
    else{
        console.log(`Error ${error}`);
    }
    
})
