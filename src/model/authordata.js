//Accessing mongoose package
const mongoose =require("mongoose");

//Database Connection
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.dnxnk.mongodb.net/ICTAK?retryWrites=true&w=majority');

//Schema definition
const Schema=mongoose.Schema;


const AuthorSchema=new Schema(
    {
        
        author:String,
        
        des:String,
        img:String
    }
);

//model creation
var Authordata=mongoose.model('authordata',AuthorSchema);
module.exports=Authordata;