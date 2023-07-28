const userservice = require('../service/userservice');
class lgservice{


static async login(Mobilenumber) {

    try {
        // var {Mobilenumber} = req.body
         //check phone number in database..
       const no=await userservice.checkuser(Mobilenumber);
        if(!no){throw new Error("NUMBER NOT REGISTER")}
        else{
            var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://2factor.in/API/V1/501acb1d-2ac0-11ee-addf-0200cd936042/SMS/'+Mobilenumber+'/AUTOGEN/OTP4',
  'headers': {
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
//   console.log(response.body);
    return response.body;
});

//res.setHeader('Content-Type', 'application/json');
//         let tokenData = {
//             status:true,
//             Number:Mobilenumber
//          }

//         const token = await userservice.generatetoken(tokenData, 'secretkey');
//         res.json({
//             status: true,
//             token: token
//         })
    }
}
    catch(err) {
        console.log(err)
    }
}

}

module.exports = lgservice;