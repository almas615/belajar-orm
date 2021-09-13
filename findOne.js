const {Article} = require('./models')

Article.findOne({id:1})
.then(article => console.log(article))