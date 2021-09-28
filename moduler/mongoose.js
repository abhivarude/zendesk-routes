const mongoose=require("mongoose");
 db_url="mongodb+srv://abhi:admin@cluster0.ujn56.mongodb.net/zendesk?retryWrites=true&w=majority";
//db_url="mongodb://localhost:27017/zendesk";
mongoose.connect(db_url,{  useNewUrlParser: true , useUnifiedTopology:true});
const connection=mongoose.connection;
module.exports =connection;
