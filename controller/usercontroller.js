const userservice = require('../service/userservice');
const request = require('request');
const login =async (req,res) => {
    try {
        var {Mobilenumber} = req.body
         //check phone number in database..
       const no=await userservice.checkuser(Mobilenumber);
        if(!no){throw new Error("NUMBER NOT REGISTER")}
        else{
        var url='https://2factor.in/API/V1/501acb1d-2ac0-11ee-addf-0200cd936042/SMS/'+Mobilenumber+'/AUTOGEN/OTP1'
       
       
        // otp sender code format
        //https://2factor.in/API/V1/:api_key/SMS/:phone_number/AUTOGEN3/:otp_template_name
        var options = {
          'method': 'GET',
          'url':url,
          'headers': {},
        };
        request(options, function (error, response) {
          if (error) throw new Error(error);
          console.log(response.body);
        });
        //res.setHeader('Content-Type', 'application/json');
        let tokenData = {
            status:true,
            Number:Mobilenumber
         }

        const token = await userservice.generatetoken(tokenData, 'secretkey');
        res.json({
            status: true,
            token: token
        })
    }
}
    catch(err) {
        console.log(err)
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
const register =async(req,res)=>{
    try{
    let {Mobilenumber,Fullname,Email,ReferralCode}=req.body;
        const user= await userservice.registeruser(Mobilenumber,Fullname,Email,ReferralCode)
        res.json(user)
    }

    catch(err)
{
    console.log(err);
}
}


module.exports = {login,verify,register}