const request = require("./request");

const pool = require('./utils/pool')
const Book = require('./Book')


const store = (booksArr) => {
    
    return Promise.all(booksArr.map(book => Book.insert(book)))

}

module.exports = store