const { request } = require('express');
const express= require('express');

const updatebookRouter = express.Router();

const Bookdata = require('../model/bookdata')

function router(nav)
{

updatebookRouter.get('/:id',function(req,res)

{
    const id = req.params.id;
    res.render("update",
    {
        nav,
        id
    }); 
});

updatebookRouter.post('/book/:id', function(req,res){
    var id = req.params.id
    var item = { $set : req.body }
    Bookdata.updateOne({_id:id}, item,{ strict:false }, function(err,result) {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/books');
        }
    });
});
return updatebookRouter;

}
module.exports=router;