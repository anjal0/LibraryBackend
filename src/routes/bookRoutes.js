const express= require('express');

const booksRouter = express.Router();

const Bookdata= require('../model/bookdata');

function router(nav){
    // var books=[
    //     {
    //         title:"David Copperfield",
    //         author:"Charles Dickens",
    //         genre:"novel",
    //         des:"David Copperfield is the eighth novel by Charles Dickens. The novel's full title is The Personal History, Adventures, Experience and Observation of David Copperfield the Younger of Blunderstone Rookery (Which He Never Meant to Publish on Any Account).[N 1] It was first published as a serial in 1849–50, and as a book in 1850.The novel features the character David Copperfield, and is written in the first person, as a description of his life until middle age, with his own adventures and the numerous friends and enemies he meets along his way. It is his journey of change and growth from infancy to maturity, as people enter and leave his life and he passes through the stages of his development.",
    //         img:'copper.jpg'
    //     },
    //     {
    //         title:"Harry Potter",
    //         author:"J K Rowling",
    //         des:"Harry James Potter is a fictional character and the titular protagonist in J. K. Rowling's series of eponymous novels. The majority of the books' plot covers seven years in the life of the orphan Harry, who, on his eleventh birthday, learns he is a wizard. Thus, he attends Hogwarts School of Witchcraft and Wizardry to practise magic under the guidance of the kindly headmaster Albus Dumbledore and other school professors along with his best friends Ron Weasley and Hermione Granger. Harry also discovers that he is already famous throughout the novel's magical community, and that his fate is tied with that of Lord Voldemort – the internationally feared Dark Wizard and murderer of his parents, Lily and James. The book and film series revolve around Harry's struggle to adapt to the wizarding world and defeat Voldemort.",
    //         genre:"fantasy novel",
    //         img:"potter.jpg"
    //     },
    //     {
    //         title:"Half Girlfriend",
    //         author:"Chethan Bagath",
    //         des:"Half Girlfriend is an Indian English coming of age, young adult romance novel by Indian author Chetan Bhagat.The novel, set in rural Bihar, New Delhi, Patna, and New York, is the story of a Bihari boy in quest of winning over the girl he loves.This is Bhagat's sixth novel which was released on 1 October 2014 by Rupa Publications. The novel has also been published in Hindi and Gujarati",
    //         genre:"novel",
    //         img:"gf.jpg"
    //     }
    // ]
    booksRouter.get('/',function(req,res){
        // res.send("Hello Anjali,Welcome!!!");
        // res.sendFile(__dirname+"/src/views/index.html");
        Bookdata.find()
        .then(function(books){
            res.render("books",
            {   
                        // nav:[{link:'/books',name:'Book'},{link:'/author',name:'Author'}]
            nav,
            title:'Available Books',
            books  //This is the books array
            }
        ); 


        })
            
    });
    booksRouter.get('/:id',function(req,res){
    
        const id=req.params.id

        Bookdata.findOne({_id:id})
        .then(function(book){
            res.render("book",{
                // nav:[{link:'/books',name:'Book'},{link:'/author',name:'Author'}]
                    nav,
                    title:'SINGLE BOOK PAGE',
                    // book:books[id]  // for accessing array
                    book //for accessing database
                });
        })
        
    
           
        });
    booksRouter.get('/delete/:id',function(req,res){

        const id=req.params.id

        Bookdata.deleteOne({_id:id})
        .then(function(){
        res.redirect('/books');

    });
});
    
    return booksRouter;
}


module.exports=router;