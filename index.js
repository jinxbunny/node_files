const express = require ('express');
const app = express ();
const path = require ('path');
const hbs = require('express-handlebars');

app.use(express.static(path.join(__dirname, 'public')));

app.engine('hbs', hbs({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: path.join(__dirname, 'views','layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials')
}));

app.set('view engine', '.hbs');

app.get('/', async(req, res) => {
    res.render ('index');
});

app.get('/*', (req, res) => {
    res.render ('404');
});

app.listen (3000, () => {
    console.log("Listening to port 3000")
});