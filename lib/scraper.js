const parse = require('./parse');
const request = require('./request');
const store = require('./Store')
const fs = require('fs');
const pool = require('./utils/pool')


pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));

request()
.then(info => parse(info))
.then(console.log)
// .then(books => store(books))
// .then(res => console.log(res.length))
