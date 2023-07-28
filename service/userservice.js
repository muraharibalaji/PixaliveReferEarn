const usermodels = require('../models/usermodel');
const tokengen=require('jsonwebtoken')
class userservice
    {
    static async registeruser(Mobilenumber,Fullname,Email,ReferralCode){
try{
    const c= await usermodels.create({Mobilenumber,Fullname,Email,ReferralCode})
    return c
}
catch(err)
{
    console.log(err);
}
    }
static async checkuser(Mobilenumber)
{
    try{
        return await usermodels.findOne({Mobilenumber})
    }
    catch(err)
    {
        console.log(err);
    }
}
static async generatetoken(tokendata,key)
{
    try{
        return await tokengen.sign(tokendata,key,{expiresIn:'1Y'})
    }
    catch(err)
    {
        console.log(err);
    }
} 
// // Required libraries
// const crypto = require('crypto');

// // Function to generate a random OTP
// function generateOTP() {
//   return Math.floor(100000 + Math.random() * 900000).toString(); // Generates a 6-digit OTP
// }

// // Function to start the OTP timer
// function startOTPTimer() {
//   const otp = generateOTP();
//   const otpExpirySeconds = 60; // OTP expires in 60 seconds
//   const otpExpiryTime = Date.now() + otpExpirySeconds * 1000;

//   console.log(`Your OTP: ${otp}`);

//   // Function to check OTP validity
//   function checkOTPValidity() {
//     const currentTime = Date.now();

//     if (currentTime < otpExpiryTime) {
//       console.log(`OTP is still valid.`);
//     } else {
//       console.log(`OTP has expired.`);
//     }
//   }

//   // Start the OTP validity checker interval
//   const intervalId = setInterval(checkOTPValidity, 1000);

//   // Clear the interval once the OTP expires
//   setTimeout(() => {
//     clearInterval(intervalId);
//     console.log(`OTP timer has stopped.`);
//   }, otpExpirySeconds * 1000);
// }

// // Example usage
// startOTPTimer();

// const a=setInterval(() => {
//     //     console.log("tea break");  
//     // }, 1000);


    }
    
    module.exports=userservice;