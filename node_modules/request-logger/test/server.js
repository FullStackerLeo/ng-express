var express = require('express');
var app = express();

var logger = module.exports = require('../')(1000);

app.use(logger);

app.get('/silent', function (req, res, next) {

});

app.get('/loud', function (req, res, next) {
  setTimeout(function () {
    res.end('IT WORKS!!!');
  }, 200);
});

app.get('/404', function (req, res, next) {
  next();
})

app.listen(3128);
