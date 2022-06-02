var Article =require('../database-mongo/db')

// Create and Save a new article
exports.create = (req, res) => {
    var article = new Article({
        title:req.body.title,
        content:req.body.content,
    
    })
    article.save()
    function (err, data) {
        if (err) {
          console.log(err,"err in creating")
        }
        res.send(data)
      }
    }




// Retrieve and return all articles from the database.
exports.findAll = (req, res) => {

};

// Find a single article with a articleName
exports.findOne = (req, res) => {

};

// Update article by the articleName
exports.update = (req, res) => {

};
 // Delete an article  by the articleName
exports.delete = (req, res) => {

};
///////