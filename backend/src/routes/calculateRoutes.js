const express=require('express');
const calculate = require('../controllers/CalcualteController');

const router=express.Router();


router.post('/',calculate);


module.exports=router;