const express = require('express');
const router = express.Router();
const User = require('../Models/User');
const {createHash , verifyHash}= require('password.js');


export const isAuthenticated = () => !!localStorage.getItem('token');


//Signup

router.post('/signup', async(req,res)=>{
    const {username , email, password} = req.body;  
    try{
        const hashedPassword = await createHash(password); //to hash the password
        const newuser = new User({username , email , hashedPassword}); //create a new user
        await newuser.save(); //save the user to the database
        console.log("User saved successfully");

    } catch(error){
        console.log("error"); res.send("Some error occurred!")
    }
})


//Login


router.post('/login', async(req,res)=>{
    const {email , password} = req.body;
    try{
        const user= await User.findOne({email}); //find the user with the given email
        if(!user){
            res.send("User not found");
        }
        const isValidPasswordd = await verifyHash(password, user.password);// to verify the password
        if(!isValidPasswordd){
            res.send("Invalid password");
        }
    }  catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
})

module.exports = router;