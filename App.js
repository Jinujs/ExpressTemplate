const path = require('path')
let express = require('express');
let app = express();
app.set('view engine', 'pug')
app.set('views', './views')
app.use(express.static(path.join(__dirname, 'views')))

app.get('/', function (req, res) {
  res.render('home')
})
app.get('/about', function (req, res) {
  res.render('about')
})
app.get('/contacts', function (req, res) {
  res.render('contacts')
})
app.listen(3000);
