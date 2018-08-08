const express = require('express');
const app = express();
const path = require('path');
let routes = require('./routes/');

app.set('views','./views');
app.set('view engine', 'pug')

app.use(express.static(path.join(__dirname, 'views')))

app.use(routes);
// app.get('/', function (req, res) {
//   res.render('header')
// })
// app.get('/', function (req, res) {
//   res.render('home')
// })
// app.get('/about', function (req, res) {
//   res.render('about')
// })
// app.get('/contacts', function (req, res) {
//   res.render('contacts')
// })
app.listen(3000);
