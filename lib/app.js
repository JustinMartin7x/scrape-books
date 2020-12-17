const { request } = require("express");

const express = require('express');
const app = express();
app.use(express.json())
const Book = require('./Book')

app.post('/book', (req, res, next) => {
Book
.insert(req.body)
.then(books => res.send(books))
.catch(next)   
})

app.get('/books', (req, res, next) => {
Book
      .find()
      .then(book => res.send(book))
      .catch(next);
   });


app.put('/book/:id', (req, res, next) => {
Book
    .findById(req.params.id)
    .then(books => res.send(books))
    .catch(next);
 });
app.delete('/book/:id', (req, res, next) => {
Book
    .delete(req.params.id)
    .then(books => res.send(books))
    .catch(next);
});
module.exports = app;