const express=require("express");
const app=express();
let bodyParser=require('body-parser');
app.use(bodyParser.json())
const cors=require("cors");

require("dotenv").config();
const connection=require("./moduler/mongoose");
const authroute=require("./routes/authenticate");
connection.once('open',()=>{console.log("db connected")});
connection.on("error",()=>{console.log("eroor")})
app.use(cors());
app.use("",authroute);


// app.listen(process.env.PORT||3004,()=>{console.log("app connected at port ${PORT}")});
app.listen(process.env.PORT||3001) 
