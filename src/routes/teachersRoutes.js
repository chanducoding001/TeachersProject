
const express = require("express");
const teachersController=require("../controllers/teachersController");
const router=express.Router();

router.post("/teacher",teachersController.createTeachers);

router.get("/teachers",teachersController.getTeachers);

module.exports=router;