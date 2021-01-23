const { request } = require('express');
const express= require('express');

const updateauthorRouter = express.Router();

const Authordata = require('../model/authordata')

function router(nav)
{

updateauthorRouter.get('/:id',function(req,res)

{
    const id = req.params.id;
    res.render("updateauth",
    {
        nav,
        id
    }); 
});

updateauthorRouter.post('/auth/:id', function(req,res){
    var id = req.params.id
    var item = { $set : req.body }
    Authordata.updateOne({_id:id}, item,{ strict:false }, function(err,result) {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/author');
        }
    });
});
return updateauthorRouter;

}
module.exports=router;