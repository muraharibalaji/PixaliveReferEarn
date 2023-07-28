const userservice = require('../service/userservice');
const lgservice = require('../controller/ctrl');
const request = require('request');
const register =async(req,res)=>{
    try{
    let {Mobilenumber,Fullname,Email,ReferralCode}=req.body;
         userservice.registeruser(Mobilenumber,Fullname,Email,ReferralCode)
        const sam =  await  lgservice.login(Mobilenumber)
        res.json(sam)
    }

    catch(err)
{
    console.log(err);
}
}
const verify= async (req,res)=>{
    try{
        var {Mobilenumber,otp}=req.body;  
        var url='https://2factor.in/API/V1/501acb1d-2ac0-11ee-addf-0200cd936042/SMS/VERIFY3/'+Mobilenumber+'/'+otp  
        //console.log(url);
        
        var options = {

            'method': 'GET',
            'url':url ,
            'headers': {},
          };
          request(options, function (error, response) {
            if (error) throw new Error(error);
            //  console.log(response.body);
            res.send(response.body);
            // if(error){res.send('otp verified')}
            // else{res.send("otp miss match")}
          })
        }
    catch(err){
        console.log(err);}

}



module.exports = {verify,register}