const { teachers } = require("../models/dbSchemas");

exports.createTeachers = async (req,res)=>{

    try{
        const {firstName,lastName,email,mobile}=req.body;

        const teacher =await teachers.create({

            firstName,lastName,email,mobile
        });
        if(!teacher){
          return  res.status(400).json("bad request");
        }
        res.status(200).json({"message":"created","teacher":teacher})

    }catch(err){
        console.log(err);
        res.status(500).json("internal server error");
    }
} 