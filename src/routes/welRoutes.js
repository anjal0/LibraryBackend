const express=require('express');

const welRouter=express.Router();



function router(nav){

welRouter.get('/',function(req,res)

{
    res.render("welcome",
    {
        nav
    }); 

});

welRouter.get('/login',function(req,res)

{
    res.render("login",
    {
        nav
    });
});

welRouter.get('/signup',function(req,res)

{
    res.render("signup",
    {
        nav
    });
}
);

return welRouter;

}
module.exports=router;