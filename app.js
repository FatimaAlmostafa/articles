var express = require('express');
var app = express();
var article = require('./controller/articlefunctions')
var  port = 3000



app.get('/', function(req, res){
    res.send("welcom to articles project");
 });
 app.get('/home', function(req, res){
    res.sendFile ("views/article.html",{root:__dirname});
 });


 ////////// Create a new  article 
app.post('/article', article.creat);

 //////// Retrieve all articles
 app.get('/all', article.findAll);

//////////////Retrieve one  articles
app.get('/catcharticle',article.findOne);

//////////////update article
app.put('/updatearticle',article.update);

/////////////// delete article
app.delete('/deleteone',article.delete);

////////////////////////

app.get('/hello', function(req, res){
    res.send("Hello World!");
 });
app.listen(port ,()=>{
    console.log("articles working ")
});