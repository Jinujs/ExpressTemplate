const express = require('express');
const app = express();
const path = require('path');

app.set('views','./views');
app.set('view engine', 'pug')

app.use(express.static(path.join(__dirname, 'views')))


// app.get('/', function (req, res) {
//   res.render('header')
// })
app.get('/', function (req, res) {
  res.render('footer')
})
// app.get('/signup', function (req, res) {
//   res.render('signup')
// })
// app.get('/home', function (req, res) {
//   res.render('home')
// })
app.listen(3000);
