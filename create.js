const {Article} = require('./models');

Article.create ({
    title: 'hello',
    body: 'lorem',
    approved: true
})
.then(article => {
    console.log(article)
})