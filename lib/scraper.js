const parse = require('./parse');
const request = require('./request');

request()
.then(info => parse(info))
.then(console.log)