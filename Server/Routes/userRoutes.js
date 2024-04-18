const express = require('express');
const userRouter = express.Router();
const {registerUser , loginUser , logOutUser }= require("../Controllers/userControllers");

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.get('/logout', logOutUser);

module.exports = userRouter;