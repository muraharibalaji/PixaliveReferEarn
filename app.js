const express=require('express')
const app=express()
const router = require('./route/router');
const bodyparser = require('body-parser');
app.use(bodyparser.json());
app.use(router);
module.exports=app;