//Accessing mongoose package
const mongoose =require("mongoose");

//Database Connection
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.dnxnk.mongodb.net/ICTAK?retryWrites=true&w=majority');

//Schema definition
const Schema=mongoose.Schema;


const BookSchema=new Schema(
    {
        title:String,
        author:String,
        genre:String,
        des:String,
        img:String
    }
);

//model creation
var Bookdata=mongoose.model('bookdata',BookSchema);
module.exports=Bookdata;