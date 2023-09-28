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
    mobile:{
        type:DataTypes.BIGINT,
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING(255),
        allowNull:false,
    },
});

module.exports={teachers};