const userservice = require('./userservice');
class lgservice{
static async login(Mobilenumber) {

    try {
        
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
  console.log(response.body);
   ;
});

    }
}
    catch(err) {
        console.log(err)
    }
}

}

module.exports = lgservice;