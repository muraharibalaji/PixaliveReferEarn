const userctrl = require('../controller/usercontroller');
const express = require("express");
const router = express.Router();
router.post('/register',userctrl.register);
router.post('/login',userctrl.login);
router.post('/verify',userctrl.verify);
module.exports = router;
