
const express = require("express");
const test=require("../controllers/test");
const router=express.Router();

router.get("/hello",test.test);

module.exports=router;