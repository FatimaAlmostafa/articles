var express = require('express');
var app = express()
var jwt = require('jsonwebtoken');
var fs =require('fs');

var article = require('./controller/articlefunctions');


var  port = 3000

var secret = fs.readFileSync('secret.key')

/////////////////////////////routing ////////////
app.get('/', function(req, res){
    res.send("welcom to articles project");
 });
 app.get('/home', function(req, res){
    res.sendFile ("views/article.html",{root:__dirname});
 });


 ////////// Create a new  article 
app.post('/article', article.create);

 //////// Retrieve all articles
 app.get('/all', article.findAll);

//////////////Retrieve one  articles
app.get('/catcharticle',article.findOne);

//////////////update article
app.put('/updatearticle',article.update);

/////////////// delete article
app.delete('/deleteone',article.delete);

////////////////////////

app.get('/hello', (req, res)=>{
    res.send("Hello World!");
 });

/////////////////////////////////jwt///////////////////
app.post ('/creatmod',verifyToken,(req,res)=>{
    jwt.verify(req.token, secret , (err,data)=>{
        if(err){
            res.sendStatus(403)
        }
        res.json ({
            message :'done authrizaution',  
            data
        })


    } )
  

})

app.post('/login',(req,res)=>{
var user = {
    name :'fatima',
    id:1,
    password:12345
}
jwt.sign({user},secret,(err,token)=>{
    if(err){
        res.json({message:' usernam or password not correct or invalid'})
    }
    res.json({token})
})
})
function verifyToken(req,res,next){
    const bearerHeader = req.headers['authorization']
    if (typeof bearerHeader !== 'undefined'){

        const bearer = bearerHeader.split(' ')

        const token = bearer[1]
        req.token = token
        next()
    }else{
      res.sendStatus(403)  
    }
    }

   

app.listen(port ,()=>{
    console.log("articles working ")
});