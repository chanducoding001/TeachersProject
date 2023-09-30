const { DataTypes } = require("sequelize");
const sequelize=require("../db/config");

const teachers = sequelize.define("teachers",{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
    },
    firstName:{
        type:DataTypes.STRING(255),
        allowNull:false,
    },
    lastName:{
        type:DataTypes.STRING(255),
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING(255),
        allowNull:false,
    },
    qualification:{
        type:DataTypes.STRING(255),
        allowNull:false,
    },
    subjects:{
        type:DataTypes.STRING(255),
        allowNull:false,
    },
    classes:{
        type:DataTypes.STRING(255),
        allowNull:false,
    },
    section:{
        type:DataTypes.STRING(255),
        allowNull:false,
    },
   phone:{
        type:DataTypes.BIGINT,
        allowNull:false,
    },
   secondPhone:{
        type:DataTypes.BIGINT,
        allowNull:false,
    },
    gender:{
        type:DataTypes.STRING(255),
        allowNull:false,
    },
    address:{
        type:DataTypes.STRING(255),
        allowNull:false,
    },
});

module.exports={teachers};