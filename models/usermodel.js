const mongoose=require('mongoose')
const s=mongoose.Schema
const userschema=new s
({
   Mobilenumber:{
        type:"string",
        required:true
    }, 
     Fullname:{
        type:"string",
        required:true
    },
    Email:{
            type:"string",
            required:true,
            unique:true,
            lowercase:true
        },
        ReferralCode:{
            type:"string"

        }
})
const usermodels=mongoose.model('userdata',userschema)
module.exports=usermodels;
console.log("usermodels schema created");