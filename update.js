const {Article} = require('./models')

const query ={
    where: {id:1}
}

Article.update ({
    approved: false
}, query)
.then(() => {
    console.log('Updated')
    process.exit()
})
.catch(err => {
    console.log("not updated")
})