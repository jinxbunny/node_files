const fetch = require('node-fetch');

const url = 'https://thesimpsonsquoteapi.glitch.me/quotes?count=1';

const getQuote = async() =>{
    let data = await fetch(url);
    return await data.json();
}

module.exports = getQuote;