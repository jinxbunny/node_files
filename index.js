const express = require ('express');
const getQuote = require ('./lib/getquote');
const path = require ('path');
const hbs = require ('express-handlebars');
const app = express ();

app.use(express.static(path.join(__dirname, 'public')));

app.engine('hbs', hbs({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: path.join(__dirname, 'views','layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials')
}));

app.set('views',path.join(__dirname, 'views'));

app.set('view engine', '.hbs');

app.get('/', async(req, res) => {
    let data = await getQuote();
    let quote = data.quote;
    res.renderx('index', {quote});
});

app.get('/*', (req, res) => {
    res.render ('404');
});

app.listen (3000, () => {
    console.log("Listening to port 3000")
});