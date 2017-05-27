# Simple-REST-
Simple Server with Node and Express JS
var express=require('express'); //import express for express router
var morgan=require('morgan'); //for used to logging 
var bodyParser=require('body-parser'); 
var hostname='localhost';
var port=3000;  //custom hostname and port address

var app=express();
app.use(morgan('dev'));


var movieRouter=express.Router();
movieRouter.use(bodyParser.json());

movieRouter.route('/')
.all(function(req,res,next){
    res.writeHead(200,{'Content-Type':'text/plain'});
    next();
})                                          // http methods GET,POST,PUT,DELETE etc
.get(function(req,res,next){
res.end('We Will Send The Movie Details');
})
.post(function(req,res,next){
    res.end('We Will add The Movie Details'+req.body.name+'and'+req.body.description);
})
.put(function(req,res,next){
res.end('We Will Update The Movie details'+req.body.name+'and'+req.body.description);
})
.delete(function(req,res,next){
    res.end('Deleting the Movies');
});


// particular movie
movieRouter.route('/:movieId')
.all(function(req,res,next){
    res.writeHead(200,{'Content-Type':'text/plain'});
    next();
})
.get(function(req,res,next){
    res.end('we will send the details of : '+ req.params.movieId);
})
.put(function(req,res,next){
res.write('Updating the Movie detail:'+req.params.movieId);
res.end('we will update the Movie details:'+req.body.name+'and'+req.body.description);
})
.post(function(req,res,next){
    res.write('inserting the Movie details:'+req.params.movieId);
    res.end('we will add the Movie detail:'+req.body.name+' and Description '+req.body.description);
})
.delete(function(req,res,next){
    res.end('Deleting the Movie'+req.params.movieId);
});

app.use('/movies',movieRouter);
app.listen(port,hostname,function(){
    console.log(`server Running at htpp://${hostname}:${port}`);
})
