const { teachers } = require("../models/dbSchemas");

exports.createTeachers = async (req,res)=>{

    try{
        const {firstName,lastName,email,phone,secondPhone,gender,
        classes,subjects,section,qualification,address}=req.body;

        const teacher =await teachers.create({

            firstName,lastName,email,qualification,classes,
            subjects,section,phone,secondPhone,gender,address
        });
        if(!teacher){
          return  res.status(400).json("bad request");
        }
        res.status(200).json({"message":"created","teacher":teacher})

    }catch(err){
        console.log(err);
        res.status(500).json("internal server error");
    }
};

exports.getTeachers= async (req,res)=>{
    try{
        const teachers_ = await teachers.findAll();
        if(!teachers_ || teachers_.length===0 ){
            return res.status(404).json("not found");
        }

        res.status(200).json(teachers_);

    }catch(err){
        console.log(err);
        res.status(500).json("internal server error");
    }
}