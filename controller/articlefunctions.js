var Article =require('../database-mongo/db')

// Create and Save a new article

exports.create = (req, res) => {
    var article = new Article({
        title:req.body.title,
        content:req.body.content,
    
    })
     //////// save article
     Article.articlemodule.save()
   .then(data => {
       res.send(data);
   }).catch(err => {
       res.send(
           console.log(err,"err in while creating and saveing")
   );
   });
  



}
  


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
    Article.find({title: 'title'},function (err, article) {
        if(!article) {
            return res.status(404).send({
                message: " article not found by title " 
            });

        res.send(article)
        }
    }); 


};

// Update article by the articleName
exports.update = (req, res) => {
   Article.findAndModify({title: 'title'}, {
    title: req.body.title ,
    content: req.body.content
},{new: true}) 
.then(article => {
    if(!article) {
        return res.status(404).send({
            message: "article not found so no updating "
        });
    }
    res.send("article updated");
})

};


 // Delete an article  by the articleName
exports.delete = (req, res) => {
    Article.findOneAndDelete({title: 'title'},function (err, article) {
        if(!article) {
            return res.status(404).send({
                message: "cant  find and delet this article " 
            });

        res.send("article deleted")
        }
    })

};
///////done