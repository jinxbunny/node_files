Create a new directory then CD into it from the console.
In console:

    $ npm init --y 
        // creates a default package.json file
    $ npm install jquery@3.5.0
        //get latest jquery
    $ npm i express
        // installs the express node module - tooling for HTTP servers, making it a great solution for single page applications, web sites, hybrids, or public HTTP APIs.
    $ touch index.jså
        // creates index.js files in the root folder
    $ npm i path --save
        // installs the path module providing utilities for working with file and directory paths.
    $ sudo npm install -g nodemon --save
        // Nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected (sudo makes sure you have permissions)
    $ npm i express-handlebars
        // Handlebars compiles templates into JavaScript functions. This makes the template execution faster than most other template engines.”
    $ npm i node-fetch --save
        // module that brings window.fetch to Node.js

Use index.js to setup a new server using:

    app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
    })

Set up link to the main index page using:

    app.get('/', (req, res) => {
        res.sendFile(__dirname + '/index.html')
    })

Create two new directories inside the server file, Views and Layouts

    inside views > create index.hbs
        // acts as a template for other HTML files
    inside views > layouts > create a new layout.hbs
        // acts as a template for other HTML files

in index.js include these lines:

    const hbs = require('express-handlebars');

    app.use(express.static(path.join(__dirname, 'public')));

    app.engine('hbs', hbs({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: path.join(__dirname, 'views','layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials')
    }));

    app.set('view engine', '.hbs');
    

Create a lib folder with a .js file containing these lines in order to get data from an api
and export it:

    const fetch = require('node-fetch');

    const url = ' "anAPI url" ';

    const funcName = async() =>{
        let data = await fetch(url);
        return await data.json();
        //return data in a .json format to be used when called
    }

    module.exports = funcName;
    //export the function to be used elsewhere

Import the function in the index.js file with the following lines:

    const funcName = require('./lib/"nameofJSfile" ');
    //

