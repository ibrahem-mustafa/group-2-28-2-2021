const {Article} = require('../../models/article.model') 


const IsArticlePublisher = async (req, res, next) => {
    const {id} = req.params;
    const article = await Article.findById(id)

    if (!article) {
        return res.status(404).json({msg: "Article Not Found"})
    }

    
    const user = req.user;

    if (article.publisher.id != user.id) {
        return res.status(403).json({msg: "You Are Not Allowed For This Action"})
    }


    req.article = article;
    next();
}


module.exports = {IsArticlePublisher}