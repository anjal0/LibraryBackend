const express= require('express');

const userRouter = express.Router();

const Bookdata = require('../model/bookdata');

const Authordata = require('../model/authordata');



userRouter.get('/',function(req,res)

{
    res.render("user",
    {
        nav:[{link:'/user/books',name:'Books'}, {link:'/user/authors', name:'Authors'} ]
    }); 
});


userRouter.get('/books', function(req,res){
    Bookdata.find()
    .then(function(books){
        res.render('newbook',{
            nav:[{link:'/user/books',name:'Books'}, {link:'/user/authors', name:'Authors'}],
            title:'Library',
            books
        });
    })

});


userRouter.get('/authors', function(req,res){
    Authordata.find()
    .then(function(authors){
        res.render('newauthor',{
            nav:[{link:'/user/books',name:'Books'}, {link:'/user/authors', name:'Authors'} ],
            title:'Library',
            authors
        });
    })

});





module.exports=userRouter;