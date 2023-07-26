const app=require('./app')
const mongoose= require('mongoose')
port=2000
const dburl="mongodb+srv://balajisri1245:SB120997@cluster0.cou5got.mongodb.net/PixaliveReferEarnDB?retryWrites=true&w=majority"
mongoose.connect(dburl)
.then((result)=>{
    console.log('Database connected')
})
.catch((err)=>{
    console.log(err)
})
app.get("/",(req,res)=>{
    res.send("PIXALIVE REFER EARN ")
})
app.listen(port)
console.log("server connected on:"+port);