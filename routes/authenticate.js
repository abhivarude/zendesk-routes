const express=require("express");
const router=express.Router();
const bcrypt=require("bcrypt");
const {signupvalidation,loginvalidation} =require("./validation");
var {signupSchema,queryschema,calenderschema} =require("../moduler/urlschema");
router.post("/signup",async (req,res)=>{

try{


    const{error}=signupvalidation(req.body);
    if(error){
    res.status(400).send({msg:error.details[0].message})
    }
    
    
    
    var data=await signupSchema.findOne({Email:req.body.Email});
    if(data)
    {
        res.status(201).json("Email alerady exists");
    }
    else{

        const salt=await bcrypt.genSalt(10);
        req.body.password=await bcrypt.hash(req.body.password,salt);
        signup= new signupSchema ({
            cname:req.body.cname,
            Email:req.body.Email,
            password:req.body.password

        })


        await signup.save();
 res.status(200).json(signup);

    }


}
catch(error){
    console.log(error);
}


})



router.post("/login",async (req,res)=>{
    console.log(req.body)
const {error}=loginvalidation(req.body);
if(error)
{
    return res.status(400).send({msg:error.details[0].message})
}


const logindata=await signupSchema.findOne({Email:req.body.Email})
if(!logindata)
{
  return  res.status(401).send({msg:'Email dosent exists'})
}
console.log(req.body.password);
console.log(logindata.password);
const isValid=await bcrypt.compare(req.body.password,logindata.password)

if(!isValid)
{
    return res.status(402).send("password dosen't match");
}
else{return res.status(200).send("verified user")
}

})



router.post("/query",async(req,res)=>{


query=queryschema({
    querytitle:req.body.querytitle,
    description:req.body.description

    

})
console.log(req.body);
await query.save();
res.status(200).json(query);

})

router.post("/calender",async(req,res)=>{


const data=await calenderschema.findOne(req.body);
res.status(200).send(data)



})

module.exports=router;