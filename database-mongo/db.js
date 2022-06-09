const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/data')


const  db = mongoose.connection

db.on('error', function () {
  console.log('mongoose connection error')
})

db.once('open', function () {
  console.log('mongoose connected successfully')
})



////////////////creat model article

const articleSchema = mongoose.Schema({
    title : String ,
    content: String,
    date :{
      type: Date,
      default: Date.now
    },
})


const Article = mongoose.model("Article", articleSchema);

module.exports = {articlemodule:Article,db:db}

///////////////////////////////////////////

