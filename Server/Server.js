const express = require("express");
const app = express();
const mongoose = require("mongoose");
const colors = require("colors");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
dotenv.config();
const userRouter = require("./Routes/userRoutes");
const storyRouter = require("./Routes/storyRoutes");

//Some Middlewares...
app.use(cors());
app.use(express.json());
app.use(cookieParser());

//Database Connection ....
mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log(`Connected to MongoDB Database...`.italic.bgGreen);
}).catch((err) => {
    console.log(err.bgRed);
})

// Routes of application 
app.use("/api/",userRouter);
app.use("/api/story/", storyRouter)
app.get("/",(req,res)=>{
    res.status(200).json("Welcome to the Server");
})

// LOCALHOST PORT : 2000
const PORT = process.env.PORT || 9001;
app.listen(PORT,() => {
    console.log(`Server is running on port : ${PORT}`.italic.bgBlue);
});

