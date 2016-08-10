require('colors');

var express = require('express'),
    parser = require('body-parser'),
    logger = require('morgan'),
    port = process.env.PORT || 1337,
    Routes = require('./routes'),
    path = require('path'),
    ejs = require('ejs'),
    mongoose = require('mongoose'),
    app = express();

mongoose.connect('mongodb://localhost/beer', (err) => {
    if(err) {
        console.error("Where's the beer? :(".red, err);
    } else {
        console.info('Let us all be tipsy, ya?'.green);
    }
});

app.use( logger('dev') );

app.set('view engine', 'html'); // private view files
app.engine('html', ejs.renderFile) // res.render

// app.set('views', path)

app.use(express.static(path.join(__dirname,'public')));

// vetically mounting body-parser is good when you know for a fact that you are going to use more verbs (be more RESTful) like PUT / PATCH / DELETE / etc. because `req.body` is where you payload will live on those type of routes.

app.use(parser.json())
app.use(parser.urlencoded({ extended: true }))

Routes(app);

app.listen(port, (err)=>{
    if(err) {
        console.error('Could not start server :(', err);
        process.exit(1); // no formalities here, but this will just exit the app if the server can't start
    } else {
        console.info('Server up!','Port:'.cyan, port);
    }
})
