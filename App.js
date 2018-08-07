const path = require('path')
let express = require('express');
let app = express();
app.set('view engine', 'pug')
app.set('views', './views')
app.use(express.static(path.join(__dirname, 'views')))

app.get('/', function (req, res) {
  res.render('header')
})
// app.get('/signup', function (req, res) {
//   res.render('signup')
// })
// app.get('/home', function (req, res) {
//   res.render('home')
// })
app.listen(3000);
