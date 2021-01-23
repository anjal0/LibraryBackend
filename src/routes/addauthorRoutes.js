const express= require('express');

const addauthorRouter = express.Router();

const Authordata=require('../model/authordata');

function router(nav)
{

addauthorRouter.get('/',function(req,res)

{
    res.render("addauthor",
    {
        nav
    }); 
});

addauthorRouter.post('/add',function(req,res)
{
    var item=
    {

        title:req.body.title,
        author:req.body.author,
        genre:req.body.genre,
        des:req.body.des,
        img:req.body.img
    }
   var author= Authordata(item);
   author.save(); // saving to database
   res.redirect('/author');


   
});


return addauthorRouter;

}
module.exports=router;