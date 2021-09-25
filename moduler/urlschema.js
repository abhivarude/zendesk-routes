const mongoose=require("mongoose");
const signupSchema=new mongoose.Schema({

    Name:String,
    Email:String,
    password:String   


})

const queryschema=new mongoose.Schema({

    querytitle:String,
    description:String
})

const calenderschema=new mongoose.Schema({


})

exports.dataschema=mongoose.model("data",calenderschema,"data");

exports.queryschema=mongoose.model("query",queryschema,"query")

exports.signupSchema=mongoose.model("signup",signupSchema,"signup")