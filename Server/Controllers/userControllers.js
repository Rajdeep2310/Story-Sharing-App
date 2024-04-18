const User = require("../Models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


// Create a new user :
const  registerUser = async(req, res ) =>{  
    try{
        const {username , password} = req.body;
        if(!username || !password){
            return res.json(400).status({error:"Please fill all the fields..."})
        }
        const hashedPassword = await bcrypt.hashSync(password,10);

        const userData = newUser = new User({
            username,
            password:hashedPassword,
        })

        await userData.save();
        res.status(200).json({message:"User Created Successfully..."})
    }catch(error){
        res.status(400).json({message:"User not created..."})
    }
}

// Login a user :
const loginUser = async(req,res) => {
    const {username , password} = req.body;
    if(!username || !password){
        res.status(400).status({message:"Please fill all the fields..."})
    }
    const userDetails = await User.findOne({username});

    if(!userDetails){
        return res.status(400).json({message:"User not found..."})
    }
    const passwordMatch = await bcrypt.compareSync(password , userDetails.password);
    if(!passwordMatch){
        return res.status(400).json({message:"Invalid Credentials..."})
    }
    const token = jwt.sign({id:userDetails._id},process.env.JWT_SECRET);

    res.cookie("token",token,{httpOnly:true});

    res.json({
        message:"User logged in successfully...",
        token:token,
        username:userDetails.username
    })
}

// Logout a user :
const logOutUser = async(req,res) =>{
    try{
        res.clearCookie("token");
        res.json({message:"User Logged Out Successfully..."})
    }catch(error){
        res.status(400).json({message:"User logged out unscuccessfull..."})
    }

}

module.exports = {
    registerUser,
    loginUser,
    logOutUser
}