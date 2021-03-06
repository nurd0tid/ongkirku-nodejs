// load the things we need
const express = require('express')
const path = require('path')
const cors = require('cors')
const app = express()
const apiRouter = require('./routes/apiResi')
const api1Router = require('./routes/apiOngkir')


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.use('/assets',express.static(__dirname + '/public/assets'));

// index page
app.get('/', function(req, res) {
    res.render('pages/index');
});

// about page
app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.get('/cekongkir', function(req, res) {
    res.render('pages/cekongkir');
});

app.get('/cekresi', function(req, res) {
    res.render('pages/lacakpaket');
});

// Definisikan Router pada path "/api"
app.use('/apiResi', apiRouter)
app.use('/apiOngkir', api1Router)

app.listen(8080);
console.log('8080 is the magic port');