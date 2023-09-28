
const express = require("express");
const teachersController=require("../controllers/teachersController");
const router=express.Router();

router.post("/teacher",teachersController.createTeachers);

module.exports=router;