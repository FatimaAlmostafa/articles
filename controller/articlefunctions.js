var Article =require('../database-mongo/db')

// Create and Save a new article

exports.create = (req, res) => {
    var article = new Article({
        title:req.body.title,
        content:req.body.content,
    
    })

}
   //////// save article
   
   




// Retrieve and return all articles from the database.
exports.findAll = (req, res) => {
    Article.articlemodule.find()
    .then(article => {
        res.send(article);
    }).catch(err => {
        res.send(
            console.log(err,"err in find all")
        );
    });


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