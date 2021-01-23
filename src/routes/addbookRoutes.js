const express= require('express');

const addbookRouter = express.Router();

const Bookdata = require('../model/bookdata')

function router(nav)
{

addbookRouter.get('/',function(req,res)

{
    res.render("addbook",
    {
        nav
    }); 
});

addbookRouter.post('/add',function(req,res)
{
    // res.send("hello I'm added");
    var item=
    {

        title:req.body.title,
        author:req.body.author,
        genre:req.body.genre,
        des:req.body.des,
        img:req.body.img
    }
   var book= Bookdata(item);
   book.save(); // saving to database
   res.redirect('/books');


   
});

return addbookRouter;

}
module.exports=router;