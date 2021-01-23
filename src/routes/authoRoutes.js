const express= require('express');

const authorRouter = express.Router();

const Authordata= require('../model/authordata');

function router(nav){
    // var authors=[
    //     {
    //         title:"Charles Dickens",
    //         nationality:"English",
    //         // genre:"novel",
    //         img:'charles-dickens.jpg',
    //         des:'Charles Dickens was a British novelist, journalist, editor, illustrator and social commentator who wrote such beloved classic novels as Oliver Twist, A Christmas Carol, Nicholas Nickleby, David Copperfield, A Tale of Two Cities and Great Expectations. Dickens is remembered as one of the most important and influential writers of the 19th century. Among his accomplishments, he has been lauded for providing a stark portrait of the Victorian-era underclass, helping to bring about social change.'
    //     },
    //     {
    //         title:"J K Rowling",
    //         nationality:"English",
    //         // genre:"fantasy novel",
    //         img:"j k.jpg",
    //         des:'Joanne Rowling was born on 31st July 1965 at Yate General Hospital near Bristol, and grew up in Gloucestershire in England and in Chepstow, Gwent, in south-east Wales.She is best known for writing the Harry Potter fantasy series, which has won multiple awards and sold more than 500 million copies,becoming the best-selling book series in history.The books are the basis of a popular film series, over which Rowling had overall approval on the scripts and was a producer on the final films.She also writes crime fiction under the pen name Robert Galbraith.'
    //     },
    //     {
    //         title:"Chethan Bagath",
    //         nationality:"India",
    //         // genre:"novel",
    //         img:"chethan.jpg",
    //         des:'Chetan Prakash Bhagat is an Indian author and columnist. He was included in Time magazines list of Worlds 100 Most Influential People in 2010.Bhagat graduated in mechanical engineering at IIT Delhi and completed an MBA at IIM Ahmedabad. He started his career as an investment banker but left it after a few years to pursue his passion for writing. He has written nine novels and three non-fiction books. His first novel, Five Point Someone, was published in 2004. His novels have been listed as bestsellers.'
    //     }
    // ]
    authorRouter.get('/',function(req,res){

        Authordata.find()
        .then(function(authors){
            res.render("author",
            {
                nav,
                title:'Authors Page',
                authors  //This is the books array
            }
            ); 
        })
    
       
    });
    authorRouter.get('/:id',function(req,res){
    
        const id=req.params.id

        Authordata.findOne({_id:id})
        .then(function(author){
            res.render("auth",{
                nav,
                title:'SINGLE AUTHOR PAGE',
                author
            });
        })
       
    });

    authorRouter.get('/delete/:id',function(req,res){

        const id=req.params.id

        Authordata.deleteOne({_id:id})
        .then(function(){
        res.redirect('/author');

    });
});
    return authorRouter;
}

module.exports=router;