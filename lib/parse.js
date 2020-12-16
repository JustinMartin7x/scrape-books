const number = require('./number')
const parse = document => {


//     //parser.js Write a lib/parser.js file. You should export a function from the file that takes a document. The function should find all books in the document and return an array of those books. Each book object should include the books title, cover image, rating, price, and a boolean indicating if it is in stock.
    
    const information = document.querySelectorAll('.product_pod');


    return [...information].map(book => ({
        name: book.querySelector('h3').textContent,
        imageUrl: book.querySelector('.image_container').querySelector('img').src,
        rating: number(book.querySelector('.star-rating').classList.item(1)),
        price: book.querySelector('.price_color').textContent,
        inStock: !!book.querySelector('.icon-ok')
    }))

}

module.exports = parse