const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials/');

require('./hbs/helpers');

app.get('/', function(req, res) {
    res.render('home', {
        nombreSaludo: 'Cesar',
        creadoPor: 'CC'
    });
});

app.get('/about', function(req, res) {
    res.render('about', {
        creadoPor: 'CC'
    });
});


app.listen(port, () => {
    console.log(`Escuchando por el puerto ${port}`);
});