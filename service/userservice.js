const usermodels = require('../models/usermodel');
const tokengen=require('jsonwebtoken')
class userservice
    {
    static async registeruser(Mobilenumber,Fullname,Email,ReferralCode){
try{
    const create = await usermodels.create({Mobilenumber,Fullname,Email,ReferralCode})
    return create
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

    }
    
    module.exports=userservice;