const express= require('express');

const app= new express();

const port =process.env.PORT || 3700 ;

const nav=[
    {
        link:'/books',name:'Book'
    },
    {
        link:'/author',name:'Author'
    },
    {
        link:'/addbook',name:'Add Book'
    },
    {
        link:'/addauthor',name:'Add Author'
    },
    {
        link:'/login',name:'LogIn'
    },
    {
        link:'/signup',name:'SignUp'
    }
    

];

const booksRouter=require('./src/routes/bookRoutes')(nav);
const authorRouter=require('./src/routes/authoRoutes')(nav);
const loginRouter=require('./src/routes/loginRoute')(nav);
const welRouter=require('./src/routes/welRoutes')(nav);
const signRouter=require('./src/routes/signRoutes')(nav);
const indexRouter=require('./src/routes/indexRoutes')(nav);
const addbookRouter=require('./src/routes/addbookRoutes')(nav);
const addauthorRouter=require('./src/routes/addauthorRoutes')(nav);
const updatebookRouter=require('./src/routes/updatebookRoutes')(nav);
const updateauthorRouter=require('./src/routes/updateauthorRoutes')(nav);
const userRouter=require('./src/routes/userRoutes');
app.use(express.static('./public'));
app.use(express.static('/images'));
app.use(express.urlencoded({extended:true}));
// app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/author',authorRouter);
app.use('/login',loginRouter);
app.use('/welcome',welRouter);
app.use('/signup',signRouter);
app.use('/index',indexRouter);
app.use('/addbook',addbookRouter);
app.use('/addauthor',addauthorRouter);
app.use('/update',updatebookRouter);
app.use('/updateauth',updateauthorRouter);
app.use('/user',userRouter);
app.get('/',function(req,res){
    // res.send("Hello Anjali,Welcome!!!");
    // res.sendFile(__dirname+"/src/views/index.html");
    res.render("welcome",
    {

        nav,
        title:'Library'
        
    });  
});
// var books=[
//     {
//         title:"David Copperfield",
//         author:"Charles Dickens",
//         genre:"novel",
//         img:'copper.jpg'
//     },
//     {
//         title:"Harry Potter",
//         author:"J K Rowling",
//         genre:"fantasy novel",
//         img:"potter.jpg"
//     },
//     {
//         title:"Half Girlfriend",
//         author:"Chethan Bagath",
//         genre:"novel",
//         img:"gf.jpg"
//     }
// ]
// booksRouter.get('/',function(req,res){
//     // res.send("Hello Anjali,Welcome!!!");
//     // res.sendFile(__dirname+"/src/views/index.html");
//     res.render("books",
//     {
//         nav:[{link:'/books',name:'Book'},{link:'/author',name:'Author'}],
//         title:'BOOKS PAGE',
//         books  //This is the books array
//     }
//     ); 
// });
// booksRouter.get('/:id',function(req,res){

//     const id=req.params.id
//     res.render("book",{
//         nav:[{link:'/books',name:'Book'},{link:'/author',name:'Author'}],
//         title:'BOOKS PAGE',
//         book:books[id]
//     });
// });
app.listen(port,()=>{console.log("Server is ready at port number"+port)});